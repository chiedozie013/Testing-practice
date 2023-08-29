const {
  stringLength,
  reverseString,
  capitalizeFirstCharacter,
} = require("./string.js");

describe("String length functions", () => {
  test("Length should be between 1 and 10", () => {
    const string = "Hundred";
    const len = string.length;
    expect(stringLength(string)).toBe(len);
  });
  test("length should be greater than 1", () => {
    const string = "";
    const error = "sorry, string length must be between 1 and 10";
    expect(stringLength(string)).toBe(error);
  });
  test("Length should be less than 10", () => {
    const string = "Microverse Student";
    const error = "sorry, string length must be between 1 and 10";
    expect(stringLength(string)).toBe(error);
  });
});

describe("String reverse finction", () => {
  test("Reverse string", () => {
    const string = "Hundred";
    const newString = string
      .split("")
      .reduce((reversed, character) => character + reversed, "");
    expect(reverseString(string)).toBe(newString);
  });
});

describe("Capitalize First Character of a String", () => {
  test("Cpitalize string", () => {
    const string = "hundred";
    expect(capitalizeFirstCharacter(string)).toBe("Hundred");
  });
});
