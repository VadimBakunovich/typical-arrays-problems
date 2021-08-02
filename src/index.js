
exports.min = function min (array) {
  if (!arr || !arr.length) return 0;
  else return arr.sort()[0];
}

exports.max = function max (array) {
  if (!arr || !arr.length) return 0;
  else return arr.sort().reverse()[0];
}

exports.avg = function avg (array) {
  if (!arr || !arr.length) return 0;
  else return arr.reduce((sum, i) => sum + i) / arr.length;
}
