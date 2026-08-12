/**
 * Remove white backgrounds from all PNG images in public/
 * Uses sharp (already installed) to make near-white pixels transparent.
 */
import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

const THRESHOLD = 240; // pixels with R,G,B all >= this become transparent

const publicDir = new URL("../public", import.meta.url).pathname;
const files = (await readdir(publicDir)).filter(f => f.endsWith(".png"));

console.log(`Processing ${files.length} PNG files…\n`);

for (const file of files) {
  const filePath = join(publicDir, file);

  try {
    const { data, info } = await sharp(filePath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    const pixels = new Uint8ClampedArray(data);

    for (let i = 0; i < pixels.length; i += channels) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      // If pixel is near-white, make it fully transparent
      if (r >= THRESHOLD && g >= THRESHOLD && b >= THRESHOLD) {
        pixels[i + 3] = 0; // alpha = 0
      }
    }

    await sharp(Buffer.from(pixels), {
      raw: { width, height, channels },
    })
      .png({ compressionLevel: 9 })
      .toFile(filePath + ".tmp.png");

    // Overwrite original
    const { rename } = await import("fs/promises");
    await rename(filePath + ".tmp.png", filePath);

    console.log(`✓ ${file}`);
  } catch (err) {
    console.error(`✗ ${file}:`, err.message);
  }
}

console.log("\nAll done — white backgrounds removed.");
