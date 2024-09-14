import { readFileSync } from 'fs';

export const JSONparisng = (path) => {
  const file = readFileSync(path);
  const JSONFile = JSON.parse(file);
  
  return JSONFile;
}