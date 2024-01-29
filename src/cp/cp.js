import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const FILE_PATH = fileURLToPath(import.meta.url);
const DIRECTORY_PATH = path.dirname(FILE_PATH);

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [`${DIRECTORY_PATH}/files/script.js`, ...args]);

  childProcess.stdout.pipe(process.stdout);
  process.stdin.pipe(childProcess.stdin);
};

//spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
spawnChildProcess(process.argv);
