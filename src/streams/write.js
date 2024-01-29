import { createWriteStream } from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const FILE_PATH = fileURLToPath(import.meta.url);
const DIRECTORY_PATH = dirname(FILE_PATH);

const write = async () => {
  const stream = createWriteStream(`${DIRECTORY_PATH}/files/fileToWrite.txt`);
  process.stdin.pipe(stream);
};

await write();