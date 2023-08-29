const Calculator = require("./calculator");

describe("Calculator class methods", () => {
  const calculate = new Calculator(8, 4);

  describe("Add method", () => {
    test("Result for Add", () => {
      expect(calculate.add()).toBe(12);
    });

    test("Result for Add", () => {
      expect(calculate.add() !== 4).toBeTruthy();
    });

    test("Result for Add", () => {
      expect(calculate.add()).not.toBe(10);
    });
  });

  describe("Substract method", () => {
    test("Result for Substract", () => {
      expect(calculate.subtract()).toBe(4);
    });

    test("Result for Subtract", () => {
      expect(calculate.subtract() !== 2).toBeTruthy();
    });

    test("Result for substract", () => {
      expect(calculate.subtract()).not.toBe(10);
    });
  });

  describe("Multiply method", () => {
    test("Result for Multiply", () => {
      expect(calculate.multiply()).toBe(32);
    });

    test("Result for Subtract", () => {
      expect(calculate.subtract() !== 2).toBeTruthy();
    });

    test("Result for substract", () => {
      expect(calculate.subtract()).not.toBe(10);
    });
  });
  describe("Divide method", () => {
    test("Result for Divide", () => {
      expect(calculate.divide()).toBe(2);
    });

    test("Result for Divide", () => {
      expect(calculate.divide() !== 7).toBeTruthy();
    });

    test("Result for Divide", () => {
      expect(calculate.divide()).not.toBe(10);
    });
  });
});
