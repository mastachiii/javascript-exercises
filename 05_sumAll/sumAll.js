const sumAll = function (numOne, numTwo) {
  if (
    numOne < 0 ||
    numTwo < 0 ||
    typeof numOne !== "number" ||
    typeof numTwo !== "number"
  ) {
    return "ERROR";
  } else if (numOne > numTwo) {
    finalSum = numOne;
    for (let i = numTwo; i < numOne; i++) {
      increment = numTwo++;
      finalSum += increment;
    }
    return finalSum;
  } else {
    finalSum = numTwo;
    for (let i = numOne; i < numTwo; i++) {
      increment = numOne++;
      finalSum += increment;
    }
    return finalSum;
  }
};

// Do not edit below this line
module.exports = sumAll;
