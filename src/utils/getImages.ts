import { readdirSync } from 'fs';
import { extname, join } from 'path';

const getImages = (dir: string) => {
  const extensions = ['.webp'];
  return readdirSync(dir)
    .filter((file: any) => extensions.includes(extname(file).toLowerCase()))
    .map((file: any) => join(dir, file));
};

export default getImages;
