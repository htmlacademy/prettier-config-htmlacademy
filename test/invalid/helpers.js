import prettier from 'prettier';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const projectRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export const format = async (source, filename) => {
  const filepath = path.join(projectRoot, filename);
  const resolved = await prettier.resolveConfig(filepath);
  return prettier.format(source, {...resolved, filepath});
};
