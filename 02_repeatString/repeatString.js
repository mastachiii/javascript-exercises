const repeatString = function (string, num) {
  a = string;
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 0; i < num; i++) {
    a = string.repeat(num);
    return a;
  }
  if (a == string) {
    return "";
  }

  return string.repeat(number)
};

// Do not edit below this line
module.exports = repeatString;
