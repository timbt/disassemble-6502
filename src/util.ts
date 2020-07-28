/**
 * Returns a formated string representing a hexidecimal number.
 * 
 * @param value - The number to be formated 
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
