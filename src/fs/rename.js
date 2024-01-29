import path from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';
import { rename as fsRename } from 'fs/promises';

const FILE_PATH = fileURLToPath(import.meta.url);
const FS_DIRECTORY_PATH = path.dirname(FILE_PATH);

const rename = async () => {
  const sourcePath = `${FS_DIRECTORY_PATH}/files/wrongFilename.txt`;
  const targetPath = `${FS_DIRECTORY_PATH}/files/properFilename.md`;

  const isTargetFileExisted = existsSync(targetPath);

  if (!isTargetFileExisted) {
    try {
      await fsRename(sourcePath, targetPath);
    } catch (error) {
      throw new Error('FS operation failed');
    }
  } else {
    throw new Error('FS operation failed');
  }
};

await rename();