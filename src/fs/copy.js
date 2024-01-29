import path from 'path';
import { fileURLToPath } from 'url';
import { cp } from 'fs/promises';

const FILE_PATH = fileURLToPath(import.meta.url);
const FS_DIRECTORY_PATH = path.dirname(FILE_PATH);

const copy = async () => {
  try {
    const sourcePath = `${FS_DIRECTORY_PATH}/files`;
    const targetPath =  `${FS_DIRECTORY_PATH}/files_copy`;

    await cp(sourcePath, targetPath, {
      errorOnExist: true,
      recursive: true,
      force: false,
    });
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
