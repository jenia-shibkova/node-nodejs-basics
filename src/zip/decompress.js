import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';

const FILE_PATH = fileURLToPath(import.meta.url);
const DIRECTORY_PATH = path.dirname(FILE_PATH);

const decompress = async () => {
  const gunzip = createGunzip();

  const readableStream = createReadStream(`${DIRECTORY_PATH}/files/archive.gz`);
  const writableStream = createWriteStream(`${DIRECTORY_PATH}/files/fileToCompress.txt`);

  readableStream.pipe(gunzip).pipe(writableStream);
};

await decompress();