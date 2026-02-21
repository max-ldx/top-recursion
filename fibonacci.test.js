import { describe, expect, test } from "vitest";
import { fibs } from "./fibonacci";

describe("fibs", () => {
    test("0 returns undefined", () => {
        expect(fibs(0)).toStrictEqual(undefined);
    });

    test("negative number returns undefined", () => {
        expect(fibs(-1)).toStrictEqual(undefined);
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