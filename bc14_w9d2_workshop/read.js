import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

const parsedJSON = JSON.parse(await fs.readFile('bootcampers.json'));

console.log(parsedJSON);