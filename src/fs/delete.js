import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { rm } from 'fs/promises';

const FILE_PATH = fileURLToPath(import.meta.url);
const FS_DIRECTORY_PATH = path.dirname(FILE_PATH);

const remove = async () => {
  const fileToRemove = `${FS_DIRECTORY_PATH}/files/fileToRemove.txt`;
  const isFileToRemoveExisted = existsSync(fileToRemove);

  if (isFileToRemoveExisted) {
    try {
      await rm(fileToRemove);
    } catch (error) {
      throw new Error('FS operation failed');
    } 
  } else {
    throw new Error('FS operation failed');
  }
};

await remove();