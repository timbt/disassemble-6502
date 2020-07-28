import { decodedInstruction } from './interfaces';
import { formatHex } from './util';
import { STA_zpg } from './instructions';
 
function decode (source : Uint8Array, programCounter : number) : decodedInstruction {

    let opcode = source[programCounter];

    switch (opcode) {

        case 0x85:
            let operand = source[programCounter + 1];
            console.log(STA_zpg(programCounter, operand).instruction);
            return STA_zpg(programCounter, operand);

        default:
            throw new Error(`Unknown opcode: 0x${formatHex(opcode, 1)}`);

    }

}

function disassemble(codeBuffer : ArrayBuffer) : Array<string> {

    let source = new Uint8Array(codeBuffer);

    let instructions = new Array<string>();

    let programCounter = 0;

    while (programCounter < source.length) {

        let decodeResult = decode(source, programCounter);
        instructions.push(decodeResult.instruction);
        programCounter += decodeResult.opbytes;

    }

    return instructions;

}

export default disassemble;
