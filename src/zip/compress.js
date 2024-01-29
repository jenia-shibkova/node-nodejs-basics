import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const FILE_PATH = fileURLToPath(import.meta.url);
const DIRECTORY_PATH = path.dirname(FILE_PATH);

const compress = async () => {
  const gzip = createGzip();

  const readableStream = createReadStream(`${DIRECTORY_PATH}/files/fileToCompress.txt`);
  const writableStream = createWriteStream(`${DIRECTORY_PATH}/files/archive.gz`);

  readableStream.pipe(gzip).pipe(writableStream);
};

await compress();