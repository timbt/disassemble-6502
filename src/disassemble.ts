import { decodedInstruction } from './interfaces';

function formatHex(value : number, bytes : number) : string {

    return value.toString(16).padStart(bytes * 2, '0');

}

function decode (source : Uint8Array, programCounter : number) : decodedInstruction {

    let opcode = source[programCounter];

    switch (opcode) {

        case 0x85:
            let operand = formatHex(
                source[programCounter + 1],
                1
            );
            let instruction = `STA $${operand}`;
            console.log(instruction);
            return {
                instruction: instruction,
                opbytes: 2
            }

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
