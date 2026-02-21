import { describe, expect, test } from "vitest";
import { mergeSort } from "./merge-sort";

describe("merge sort", () => {
    test("[] returns []", () => {
        expect(mergeSort([])).toStrictEqual([]);
    });

    test("[73] returns [73]", () => {
        expect(mergeSort([73])).toStrictEqual([73]);
    });

    test("[1, 2, 3, 4, 5] returns [1, 2, 3, 4, 5]", () => {
        expect(mergeSort([1, 2, 3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    });

    test("[3, 2, 1, 13, 8, 5, 0, 1] returns [0, 1, 1, 2, 3, 5, 8, 13]", () => {
        expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });
});