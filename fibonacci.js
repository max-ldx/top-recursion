export function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let first = 0;
    let second = 1;

    const result = [first, second];

    for (let i = 2; i < n; i++) {
        result.push(first + second);
        [first, second] = [second, second + first];
    }

    return result;
}

export function fibsRec(n, array = [0, 1]) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    if (array.length >= n) {
        return array;
    }

    const nextVal = array[array.length - 1] + array[array.length - 2];
    array.push(nextVal);

    return fibsRec(n, array);
}