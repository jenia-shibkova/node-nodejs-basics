import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const FILE_PATH = fileURLToPath(import.meta.url);
const DIRECTORY_PATH = path.dirname(FILE_PATH);

const read = async () => {
  const stream = createReadStream(`${DIRECTORY_PATH}/files/fileToRead.txt`);
  stream.pipe(process.stdout);
};

await read();