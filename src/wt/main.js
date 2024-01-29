import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import { cpus } from 'os';

const FILE_PATH = fileURLToPath(import.meta.url);
const DIRECTORY_PATH = path.dirname(FILE_PATH);
const number = 10;

const performCalculations = async () => {
  const cpuCount = cpus().length;

  const workers = [];

  for (let i = 0; i < cpuCount; i += 1 ) {
    workers.push(
      new Promise((resolve, reject) => {
        const worker = new Worker(`${DIRECTORY_PATH}/worker.js`, {
          workerData: number + i,
        });

        worker.once('message', (data) => {
          resolve(data);
        });

        worker.on('error', (error) => {
          reject(null);
        });
      })
    );
  }

  console.log((await Promise
      .allSettled(workers))
      .map((item) => ({
        status: item.status === 'rejected' ? 'error' : 'resolved',
        data: item.value || null,
      })
    )
  );
};

await performCalculations();