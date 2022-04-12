const ftoc = function(far) {
  return parseFloat(Number.parseFloat((far-32)*(5/9)).toFixed(1));
};

const ctof = function(cel) {
  return parseFloat(Number.parseFloat(cel*(9/5)+32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
