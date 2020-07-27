import { readFileSync } from 'fs';
import disassemble from './disassemble';

const buffer = readFileSync('./romfiles/space_invaders_pal.a26');

const decodedInstructions = disassemble(buffer);

for (let instruction of decodedInstructions) {

    console.log(instruction);

}
