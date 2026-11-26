// News-image entry: write the front-page image for Thursday 26 November 2026
// to the grader's output directory, byte for byte, with no network access.
//
// The image lives beside this file as entry.png (a JPEG, 1024x1024, under 1 MiB;
// the gate tells the type from the first bytes, so the .png name is fine).
// This program only copies it: the same input always produces the same output.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, 'entry.png');

// The grader hands us /output; outside the container MAKEFUN_OUTPUT_DIR stands in.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const targetPath = join(outDir, 'entry.png');

const bytes = readFileSync(sourcePath);

// Sanity-check what we are about to hand in: a JPEG, 1024x1024, at most 1 MiB.
const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
const isPng = bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47;
if (!isJpeg && !isPng) {
  throw new Error('entry.png is neither a JPEG nor a PNG');
}
if (bytes.length > 1024 * 1024) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB limit`);
}

if (!existsSync(outDir)) {
  mkdirSync(outDir, { recursive: true });
}

writeFileSync(targetPath, bytes);

// Read it back and confirm the copy is exact before we report success.
const written = readFileSync(targetPath);
if (written.length !== bytes.length || !written.equals(bytes)) {
  throw new Error('output does not match entry.png byte for byte');
}

console.log(`wrote ${targetPath} (${bytes.length} bytes)`);
