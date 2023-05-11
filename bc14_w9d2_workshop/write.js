import fs from 'node:fs/promises';
import { v4 as uuidv4 } from 'uuid';

const bootcampers = [];

const naomi = {id: uuidv4(), name: "Naomi"}
const bryony = {id: uuidv4(), name: "Bryony"}
const ben = {id: uuidv4(), name: "Ben"}
 
bootcampers.push(naomi, bryony, ben);


// Convert it to JSON 

const bootcampersJSON = JSON.stringify(bootcampers);

// Write to file

await fs.writeFile("bootcampers.json", bootcampersJSON, "utf-8");

console.log(bootcampersJSON)

