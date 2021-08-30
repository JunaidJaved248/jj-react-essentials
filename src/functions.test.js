import { timesTwo } from "./functions";

test("Multiplies By two", () => {
    expect(timesTwo(4)).toBe(8);
});