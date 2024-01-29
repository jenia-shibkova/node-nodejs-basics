import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { readFile } from 'fs/promises';

const FILE_PATH = fileURLToPath(import.meta.url);
const FS_DIRECTORY_PATH = path.dirname(FILE_PATH);

const read = async () => {
  const sourcePath = `${FS_DIRECTORY_PATH}/files/fileToRead.txt`;
  const isFileExisted = existsSync(sourcePath);

  if (isFileExisted) {
    try {
      const fileContent = await readFile(sourcePath, { encoding: 'utf8' });
      console.log(`${fileContent}`);
    } catch (error) {
      throw new Error('FS operation failed');
    }
  } else {
    throw new Error('FS operation failed');
  }
};

await read();