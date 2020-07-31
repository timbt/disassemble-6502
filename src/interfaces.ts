/** A single decoded assembler instruction */
export interface decodedInstruction {

    /** The instruction, represented as a single line of assembly code */
    instruction: string,

    /** The number of bytes used by the instruction */
    opbytes: number

};
