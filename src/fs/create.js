import path from 'path';
import { fileURLToPath } from 'url';
import { open } from 'fs/promises';

const FILE_PATH = fileURLToPath(import.meta.url);
const FS_DIRECTORY_PATH = path.dirname(FILE_PATH);

const create = async () => {
  let  file;

  try {
    const sourcePath = `${FS_DIRECTORY_PATH}/files`;
    file = await open(`${sourcePath}/fresh.txt`, 'wx');
    await file.writeFile('I am fresh and young');
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await create();