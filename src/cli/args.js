const parseArgs = () => {
  const { argv } = process;
  const argsIndexes = [];

  argv.filter((el, index) => el.startsWith('--') && argsIndexes.push(index));

  const result = argsIndexes.map((index) => `${argv[index].slice(2)} is ${argv[index + 1]}`);

  if (result.length) {
    console.log(result. join(', '));
  }
};

parseArgs();