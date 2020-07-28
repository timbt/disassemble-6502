export function formatHex(value : number, bytes : number) : string {

    return value.toString(16).padStart(bytes * 2, '0');

}
