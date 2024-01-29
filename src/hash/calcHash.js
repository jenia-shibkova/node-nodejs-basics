import path from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';

const hash = createHash('sha256');
const FILE_PATH = fileURLToPath(import.meta.url);
const DIRECTORY_PATH = path.dirname(FILE_PATH);

const calculateHash = async () => {
  const file = await readFile(`${DIRECTORY_PATH}/files/fileToCalculateHashFor.txt`,
    {
      encoding: 'UTF-8',
    }
  );

  hash.update(file);
  console.log(hash.digest('hex'));
};

await calculateHash();