import { Jimp } from 'jimp';
import fs from 'fs';
import path from 'path';

const OUT_DIR = path.resolve('public/assets/logo');
const SOURCE_LOGO = path.join(OUT_DIR, 'manshal-logo-original.jpg');

function trimTransparentBounds(image, padding = 10) {
  const { width, height, data } = image.bitmap;
  let minX = width, minY = height, maxX = 0, maxY = 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const alpha = data[(width * y + x) << 2 | 3];
      if (alpha > 20) {
        if (x < minX) minX = x;
        if (y < minY) minY = y;
        if (x > maxX) maxX = x;
        if (y > maxY) maxY = y;
      }
    }
  }

  const cropX = Math.max(0, minX - padding);
  const cropY = Math.max(0, minY - padding);
  const cropW = Math.min(width - cropX, maxX - minX + 1 + padding * 2);
  const cropH = Math.min(height - cropY, maxY - minY + 1 + padding * 2);

  return image.crop({ x: cropX, y: cropY, w: cropW, h: cropH });
}

async function processLogos() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const img = await Jimp.read(SOURCE_LOGO);
  const width = img.bitmap.width;
  const height = img.bitmap.height;

  // 2. Create dark-background-ready horizontal version (preserving 100% original geometry & blue/cyan colors)
  const darkLogo = img.clone();

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (width * y + x) << 2;
      const r = darkLogo.bitmap.data[idx];
      const g = darkLogo.bitmap.data[idx + 1];
      const b = darkLogo.bitmap.data[idx + 2];

      const maxC = Math.max(r, g, b);
      const minC = Math.min(r, g, b);
      const saturation = maxC === 0 ? 0 : (maxC - minC) / maxC;
      const brightness = (r + g + b) / 3;

      // Left icon region or the blue triangle inside the first 'A'
      const inLeftIcon = x < width * 0.255;
      const inATriangle = x > width * 0.445 && x < width * 0.51 && y > height * 0.47 && y < height * 0.66;
      const isBlueCyan = (inLeftIcon || inATriangle) && b > r + 30 && b > 75 && saturation > 0.28;

      if (isBlueCyan) {
        if (brightness > 225 && saturation < 0.35) {
          const alpha = Math.max(0, Math.min(255, Math.round((248 - brightness) * 10)));
          darkLogo.bitmap.data[idx + 3] = alpha;
        } else {
          darkLogo.bitmap.data[idx + 3] = 255;
        }
      } else {
        if (brightness > 236) {
          darkLogo.bitmap.data[idx + 3] = 0;
        } else {
          const darkness = Math.max(0, Math.min(1, (236 - brightness) / 195));
          const alpha = Math.round(Math.pow(darkness, 0.82) * 255);
          darkLogo.bitmap.data[idx] = 255;
          darkLogo.bitmap.data[idx + 1] = 255;
          darkLogo.bitmap.data[idx + 2] = 255;
          darkLogo.bitmap.data[idx + 3] = alpha;
        }
      }
    }
  }

  trimTransparentBounds(darkLogo, 12);
  await darkLogo.write(path.join(OUT_DIR, 'manshal-logo-dark.png'));

  // 3. Extract the icon-only version (the 3D blue/cyan 'M' mark on the left)
  const iconCropWidth = Math.round(width * 0.255);
  const iconOnly = img.clone().crop({ x: 0, y: 0, w: iconCropWidth, h: height });

  for (let y = 0; y < iconOnly.bitmap.height; y++) {
    for (let x = 0; x < iconOnly.bitmap.width; x++) {
      const idx = (iconOnly.bitmap.width * y + x) << 2;
      const r = iconOnly.bitmap.data[idx];
      const g = iconOnly.bitmap.data[idx + 1];
      const b = iconOnly.bitmap.data[idx + 2];
      const brightness = (r + g + b) / 3;
      const maxC = Math.max(r, g, b);
      const minC = Math.min(r, g, b);
      const saturation = maxC === 0 ? 0 : (maxC - minC) / maxC;

      if (brightness > 235 && saturation < 0.2) {
        iconOnly.bitmap.data[idx + 3] = 0;
      } else if (brightness > 215 && saturation < 0.28) {
        const alpha = Math.max(0, Math.min(255, Math.round((240 - brightness) * 9)));
        iconOnly.bitmap.data[idx + 3] = alpha;
      } else {
        iconOnly.bitmap.data[idx + 3] = 255;
      }
    }
  }

  trimTransparentBounds(iconOnly, 12);
  await iconOnly.write(path.join(OUT_DIR, 'manshal-icon.png'));

  console.log('Successfully generated tightly-cropped manshal-logo-original.jpg, manshal-logo-dark.png, and manshal-icon.png');
}

processLogos().catch((err) => {
  console.error('Error processing logos:', err);
  process.exit(1);
});
