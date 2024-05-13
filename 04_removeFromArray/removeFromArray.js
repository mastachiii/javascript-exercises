const removeFromArray = function (array, ...string) {
  let difference = array.filter((x) => !string.includes(x));
  return difference;
};


// Do not edit below this line
module.exports = removeFromArray;
