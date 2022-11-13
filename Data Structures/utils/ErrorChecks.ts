export const CheckIndexOutOfBounds = (index: number, size: number): false => {
    if (index > size) {
        throw new Error('Index out of bounds');
    }
    return false;
}