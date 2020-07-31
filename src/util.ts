/**
 * Returns a formatted string representing a hexadecimal number.
 * 
 * @param value - The number to be formatted 
 * @param bytes - The minimum number of bytes that should be represented in
 * the string. This is used for zero-padding.
 * 
 */
export function formatHex(value : number, bytes : number) : string {

    return value
        .toString(16)
        .padStart(bytes * 2, '0')
        .toUpperCase();

}
