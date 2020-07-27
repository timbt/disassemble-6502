interface decodedInstruction {
    instruction: string,
    opbytes: number
}

function decode (source : Uint8Array, programCounter : number) : decodedInstruction {

    let opcode = source[programCounter];

    switch (opcode) {

        default:
            throw new Error(`Unknown opcode: ${opcode}`);

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
