const parseEnv = () => {
  const result = Object.entries(process.env)
    .filter((el) => el[0].startsWith('RSS_'))
    .map((el) => `${el[0]}=${el[1]}`)
    .join('; ');
  
  console.log(result)
};

parseEnv();