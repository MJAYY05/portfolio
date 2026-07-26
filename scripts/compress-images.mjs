#!/usr/bin/env node
/**
 * Converts every jpg/jpeg/png under public/ to webp (max width 1600px, quality 80),
 * backs up the originals to image-backups/ (mirroring the public/ structure), and
 * removes the original files from public/ once the webp version is written.
 *
 * Usage: node scripts/compress-images.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const BACKUP_DIR = path.join(ROOT, "image-backups");
const MAX_WIDTH = 1600;
const QUALITY = 80;
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else if (EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function removeWithRetry(file, attempts = 5, delayMs = 300) {
  for (let i = 0; i < attempts; i++) {
    try {
      await fs.rm(file);
      return;
    } catch (err) {
      if (err.code === "EBUSY" && i < attempts - 1) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        continue;
      }
      throw err;
    }
  }
}

async function main() {
  const files = await walk(PUBLIC_DIR);

  if (files.length === 0) {
    console.log("No jpg/jpeg/png files found under public/.");
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;
  const renamed = [];

  for (const file of files) {
    const relative = path.relative(PUBLIC_DIR, file);
    const backupPath = path.join(BACKUP_DIR, relative);
    const webpPath = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");

    await fs.mkdir(path.dirname(backupPath), { recursive: true });
    await fs.copyFile(file, backupPath);

    const before = (await fs.stat(file)).size;

    await sharp(file)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const after = (await fs.stat(webpPath)).size;
    await removeWithRetry(file);

    totalBefore += before;
    totalAfter += after;
    renamed.push({
      from: `/${relative.replace(/\\/g, "/")}`,
      to: `/${path.relative(PUBLIC_DIR, webpPath).replace(/\\/g, "/")}`,
    });

    console.log(
      `${relative} -> ${path.relative(PUBLIC_DIR, webpPath)}  (${formatBytes(before)} -> ${formatBytes(after)})`,
    );
  }

  console.log("\n--- Summary ---");
  console.log(`Files processed: ${files.length}`);
  console.log(`Total before: ${formatBytes(totalBefore)}`);
  console.log(`Total after:  ${formatBytes(totalAfter)}`);
  console.log(
    `Saved: ${formatBytes(totalBefore - totalAfter)} (${(
      ((totalBefore - totalAfter) / totalBefore) *
      100
    ).toFixed(1)}%)`,
  );
  console.log(`\nOriginals backed up to: ${path.relative(ROOT, BACKUP_DIR)}`);

  await fs.writeFile(
    path.join(ROOT, "image-backups", "path-mapping.json"),
    JSON.stringify(renamed, null, 2),
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
