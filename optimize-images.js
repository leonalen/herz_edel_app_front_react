import sharp from 'sharp';
import { globSync } from 'glob';
import fs from 'fs-extra';
import path from 'path';

const inputPattern = 'public/img/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}';
const quality = 80; // Calidad para WebP (0-100)

console.log('Buscando imágenes para optimizar...');

const imagePaths = globSync(inputPattern);

if (imagePaths.length === 0) {
    console.log('No se encontraron imágenes para optimizar.');
    process.exit(0);
}

console.log(`Se encontraron ${imagePaths.length} imágenes. Iniciando optimización...`);

const optimizeImage = async (imagePath) => {
    try {
        const originalSize = (await fs.stat(imagePath)).size;
        
        const parsedPath = path.parse(imagePath);
        const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
        
        // No procesar si ya existe para evitar trabajo redundante
        if (fs.existsSync(webpPath)) {
            return;
        }

        const outputBuffer = await sharp(imagePath)
            .rotate() // Lee los metadatos EXIF y rota la imagen automáticamente
            .webp({ quality }).toBuffer();
        await fs.writeFile(webpPath, outputBuffer);
        
        const newSize = outputBuffer.length;
        const reduction = (((originalSize - newSize) / originalSize) * 100).toFixed(2);

        console.log(`✅ Optimizado: ${imagePath} -> ${webpPath} | Reducción: ${reduction}%`);
    } catch (error) {
        console.error(`❌ Error optimizando ${imagePath}:`, error);
    }
};

Promise.all(imagePaths.map(optimizeImage)).then(() => {
    console.log('\n✨ ¡Optimización de imágenes completada!');
});