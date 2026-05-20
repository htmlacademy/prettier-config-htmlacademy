import {readFile, writeFile} from 'node:fs/promises';

const config = {
  name: 'codeguide',
  version: '1.0.0',
  authors: ['HTML Academy', 'Contributors'],
};

const greet = (name) => `Hello, ${name}!`;

const load = async (path) => {
  const data = await readFile(path, 'utf8');
  return JSON.parse(data);
};

const save = async (path, payload) => {
  await writeFile(path, JSON.stringify(payload, null, 2));
};

export {config, greet, load, save};
