const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');

async function compress() {
  console.log('Starting image compression in:', IMAGES_DIR);
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('Directory does not exist:', IMAGES_DIR);
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR);
  console.log(`Found ${files.length} files in directory.`);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const inputPath = path.join(IMAGES_DIR, file);
      const outputName = path.basename(file, ext) + '.webp';
      const outputPath = path.join(IMAGES_DIR, outputName);

      // Skip if it's already a webp and it exists (optional, but let's overwrite to ensure compression)
      console.log(`Processing: ${file}...`);
      try {
        const metadata = await sharp(inputPath).metadata();
        const originalSizeKB = (fs.statSync(inputPath).size / 1024).toFixed(1);

        let pipeline = sharp(inputPath);

        // Limit maximum width to 1200px to avoid massive resolutions for web views,
        // but keep aspect ratio.
        if (metadata.width && metadata.width > 1200) {
          pipeline = pipeline.resize({ width: 1200, withoutEnlargement: true });
        }

        // Convert to webp with high quality but good compression (quality 80)
        // keeps alpha transparent background
        await pipeline
          .webp({ quality: 80, lossy: true })
          .toFile(outputPath);

        const newSizeKB = (fs.statSync(outputPath).size / 1024).toFixed(1);
        const percentSaved = (((originalSizeKB - newSizeKB) / originalSizeKB) * 100).toFixed(1);

        console.log(`  Converted ${file} -> ${outputName}`);
        console.log(`  Size: ${originalSizeKB} KB -> ${newSizeKB} KB (Reduced by ${percentSaved}%)`);
      } catch (err) {
        console.error(`  Error processing ${file}:`, err.message);
      }
    }
  }
  console.log('Image compression finished successfully!');
}

compress();
