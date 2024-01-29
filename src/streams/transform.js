import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const result = new Transform({
    transform(chunk, _, callBack) {
      callBack(null, chunk
        .toString()
        .split('')
        .reverse()
        .join(''))
    }
  });
  stdin.pipe(result).pipe(stdout);
};

await transform();