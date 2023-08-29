const stringLength = (string) => {
  const newString = string.length;
  if (newString >= 1 && newString <= 10) {
    return newString;
  } else {
    return "sorry, string length must be between 1 and 10";
  }
};

const reverseString = (string) => {
  const newString = string
    .split("")
    .reduce((reversed, character) => character + reversed, "");
  return newString;
};

const capitalizeFirstCharacter = (string) => {
  const newString = string.charAt(0).toUpperCase() + string.slice(1);
  return newString;
};

module.exports = { stringLength, reverseString, capitalizeFirstCharacter };
