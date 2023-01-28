const PREFIX = 'REACT_APP_';

const getConfig = (name: string) => {
  const configName = `${PREFIX}${name}`;
  if (configName in process.env) return process.env[configName];
  else throw Error('CONFIG ERROR', { cause: `NOT FOUND ${name} CONFIG` });
};

export const NODE_ENV = getConfig('NODE_ENV');
export const API_URL = getConfig('API_URL');

if (NODE_ENV === 'development') console.info('APP CONFIG :: ', process.env);
