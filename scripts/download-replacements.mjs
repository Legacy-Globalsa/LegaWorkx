import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');

// Unique replacement images from Pexels (free commercial use)
const images = [
  { filename: 'detail-headlight.jpg', url: 'https://images.pexels.com/photos/18641160/pexels-photo-18641160.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { filename: 'detail-tire-rim.jpg', url: 'https://images.pexels.com/photos/31999237/pexels-photo-31999237.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { filename: 'detail-engine-bay.jpg', url: 'https://images.pexels.com/photos/21715608/pexels-photo-21715608.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { filename: 'detail-interior.jpg', url: 'https://images.pexels.com/photos/31299590/pexels-photo-31299590.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { filename: 'detail-leather.jpg', url: 'https://images.pexels.com/photos/29293845/pexels-photo-29293845.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { filename: 'detail-window-tint.jpg', url: 'https://images.pexels.com/photos/10165464/pexels-photo-10165464.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Timeout after 20s')), 20000);
    const doRequest = (reqUrl) => {
      https.get(reqUrl, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          doRequest(res.headers.location);
          return;
        }
        if (res.statusCode !== 200) {
          clearTimeout(timer);
          reject(new Error(`HTTP ${res.statusCode}`));
          return;
        }
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on('finish', () => { clearTimeout(timer); file.close(); resolve(); });
      }).on('error', (err) => { clearTimeout(timer); reject(err); });
    };
    doRequest(url);
  });
}

async function main() {
  console.log('Downloading replacement images...\n');
  for (const img of images) {
    const destPath = path.join(ASSETS_DIR, img.filename);
    // Delete existing duplicate
    if (fs.existsSync(destPath)) {
      fs.unlinkSync(destPath);
      console.log(`🗑️  Removed old ${img.filename}`);
    }
    try {
      console.log(`⬇️  Downloading ${img.filename}...`);
      await downloadFile(img.url, destPath);
      const stats = fs.statSync(destPath);
      console.log(`✅ ${img.filename} (${(stats.size / 1024).toFixed(0)} KB)\n`);
    } catch (err) {
      console.log(`❌ ${img.filename}: ${err.message}\n`);
    }
  }
  console.log('Done!');
}

main().catch(console.error);
