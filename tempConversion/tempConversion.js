const ftoc = function(temp) {
  let conv = (temp - 32) * 5/9;
  return round(conv, 1)
}

const ctof = function(temp) {
  let conv = temp * 9/5 + 32;
  return round(conv, 1)
}

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

module.exports = {
  ftoc,
  ctof
}