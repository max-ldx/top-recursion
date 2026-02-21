import { describe, expect, test } from "vitest";
import { fibs, fibsRec } from "./fibonacci";

describe("fibs", () => {
    test("0 returns []", () => {
        expect(fibs(0)).toStrictEqual([]);
    });

    test("negative number returns []", () => {
        expect(fibs(-1)).toStrictEqual([]);
    });

    test("1 returns [0]", () => {
        expect(fibs(1)).toStrictEqual([0]);
    });

    test("2, returns [0, 1]", () => {
        expect(fibs(2)).toStrictEqual([0, 1]);
    });

    test("8, returns [0, 1, 1, 2, 3, 5, 8, 13]", () => {
        expect(fibs(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test("10, returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]", () => {
        expect(fibs(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});

describe("fibsRec", () => {
    test("0 returns []", () => {
        expect(fibsRec(0)).toStrictEqual([]);
    });

    test("negative number []", () => {
        expect(fibsRec(-1)).toStrictEqual([]);
    });

    test("1 returns [0]", () => {
        expect(fibsRec(1)).toStrictEqual([0]);
    });

    test("2, returns [0, 1]", () => {
        expect(fibsRec(2)).toStrictEqual([0, 1]);
    });

    test("8, returns [0, 1, 1, 2, 3, 5, 8, 13]", () => {
        expect(fibsRec(8)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13]);
    });

    test("10, returns [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]", () => {
        expect(fibsRec(10)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
});