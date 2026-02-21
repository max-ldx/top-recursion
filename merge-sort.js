export function mergeSort(array = []) {
    if (array.length <= 1) {
        return array;
    }

    const leftHalf = array.slice(0, array.length / 2);
    const rightHalf = array.slice(array.length / 2);

    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    const result = [];

    let i = 0;
    let j = 0;

    while (i < sortedLeft.length && j < sortedRight.length) {
        if (sortedLeft[i] <= sortedRight[j]) {
            result.push(sortedLeft[i]);
            i++;
        } else {
            result.push(sortedRight[j]);
            j++;
        }
    }

    result.push(...sortedLeft.slice(i));
    result.push(...sortedRight.slice(j));

    return result;
}