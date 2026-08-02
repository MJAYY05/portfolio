#!/usr/bin/env node
/**
 * Re-derives activity photos from their backed-up originals,
 * fixing two issues from the earlier compress-images.mjs pass:
 *   1. EXIF orientation was not applied before resizing, so the two camera
 *      photos (shot in portrait, stored rotated) got baked in sideways.
 *   2. Quality/resolution was too aggressive for real photographs, making
 *      them look soft compared to the originals.
 *
 * Usage: node scripts/fix-activity-photos.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const BACKUP_DIR = path.join(ROOT, "image-backups", "activity");
const OUT_DIR = path.join(ROOT, "public", "activity");
const MAX_WIDTH = 2000;
const QUALITY = 92;

const FILES = [
  "itexpoday1.jpg",
  "itexpoday2.jpg",
  "itexpoday3.png",
  "reru1.jpg",
  "reru2.jpg",
  "reru3.jpg",
];

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  for (const name of FILES) {
    const src = path.join(BACKUP_DIR, name);
    const outName = name.replace(/\.(jpg|jpeg|png)$/i, ".webp");
    const out = path.join(OUT_DIR, outName);

    const before = (await fs.stat(src)).size;

    const quality = name.startsWith("reru") ? 82 : QUALITY;

    await sharp(src)
      .rotate() // auto-orient using EXIF, then bake it into the pixels
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality })
      .toFile(out);

    const meta = await sharp(out).metadata();
    const after = (await fs.stat(out)).size;

    console.log(
      `${name} -> ${outName}  ${meta.width}x${meta.height}  (${formatBytes(before)} -> ${formatBytes(after)})`,
    );
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
