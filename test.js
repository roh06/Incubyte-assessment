const StringCalculator = require('./Index');


describe("StringCalculator", () => {
    let calculator;

    beforeEach(()=>{
        calculator = new StringCalculator();
    })

    test("Empty String should return 0", () => {
        expect(calculator.add("")).toBe(0);
    });

    test("Single number should return the same number", () => {
        expect(calculator.add("1")).toBe(1);
    });

    test("Two numbers should return their sum", () => {
        expect(calculator.add("1,2")).toBe(3);
    });

    test("Multiple numbers should return their sum", () => {
        expect(calculator.add("1,2,3,4")).toBe(10);
    });

    test("New line as a delimiter should be supported", () => {
        expect(calculator.add("1\n2,3")).toBe(6);
    });

    test("Custom delimiter should be supported", () => {
        expect(calculator.add("//;\n1;2")).toBe(3);
    });

    test("Custom delimiter with pipe (|) should be supported", () => {
        expect(calculator.add("//|\n3|5")).toBe(8);
    });

    test("Negative numbers should throw an exception", () => {
        expect(() => calculator.add("1,-2,3")).toThrow("negatives not allowed: -2");
    });

    test("Multiple negative numbers should throw an exception", () => {
        expect(() => calculator.add("-1,-2,3,-4")).toThrow("negatives not allowed: -1,-2,-4");
    });

    test("getCalledCount should return correct count", () => {
        calculator.add("1,2");
        calculator.add("3,4,5");
        expect(calculator.getCalledCount()).toBe(2);
    });

})