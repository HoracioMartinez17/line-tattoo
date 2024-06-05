import { readdirSync, renameSync } from 'fs';
import { join, extname } from 'path';

const renameImages = (dir: string, prefix: string) => {
  const extensions = ['.webp'];
  const files = readdirSync(dir)
    .filter(file => extensions.includes(extname(file).toLowerCase()))
    .sort(); // Sort to ensure the order is maintained

  files.forEach((file, index) => {
    const ext = extname(file).toLowerCase();
    const newFileName = `${prefix}-${index + 1}${ext}`;
    const oldFilePath = join(dir, file);
    const newFilePath = join(dir, newFileName);

    renameSync(oldFilePath, newFilePath);
  });
};

// Llama a la función con la carpeta deseada y el prefijo
const imagesDirectory = 'public/tattoo'; // Ajusta la ruta según tu estructura de carpetas
const prefix = 'tattoo';

renameImages(imagesDirectory, prefix);
