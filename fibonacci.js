export function fibs(number) {
    if (number <= 0) return undefined;
    if (number === 1) return [0];

    let first = 0;
    let second = 1;

    const result = [first, second];

    for (let i = 2; i < number; i++) {
        result.push(first + second);
        [first, second] = [second, second + first];
    }

    return result;
}