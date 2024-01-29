import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { readdir } from 'fs/promises';

const FILE_PATH = fileURLToPath(import.meta.url);
const FS_DIRECTORY_PATH = path.dirname(FILE_PATH);

const list = async () => {
  const filesDir = `${FS_DIRECTORY_PATH}/files`;

  if (existsSync(filesDir)) {
    try {
      const files = await readdir(filesDir);
      
      const fileNames = [];
      for (const file of files) {
        fileNames.push(file);
      }
      console.log(fileNames);
    } catch (err) {
      throw new Error('FS operation failed');
    }
  } else {
    throw new Error('FS operation failed');
  }
};

await list();