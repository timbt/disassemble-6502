import { formatHex } from './util';
import { decodedInstruction } from './interfaces';

function formatInstructionLine(
    ProgramCounter : number,
    hexValues : Uint8Array,
    instruction : string
) : string {
    
    // First column: Two byte program counter
    let pcColumn = formatHex(ProgramCounter, 2);
    
    // Second column: Instruction and any operands as space seperated hex
    // values
    let hexColumn = '';
    for (let i = 0; i < hexValues.length; i++) {
        hexColumn += formatHex(hexValues[i], 1) + ' ';
    }

    return `${pcColumn}\t${hexColumn}\t\t${instruction}`;

}

export function STA_zpg(programCounter : number, operand: number) : decodedInstruction {

    let instruction = `STA $${formatHex(operand, 1)}`;
    const instructionValue = 0x85;
    let hexValues = new Uint8Array([instructionValue, operand]);
    return {
        instruction: formatInstructionLine(programCounter, hexValues, instruction),
        opbytes: 2
    };

}