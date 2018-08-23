const HOURS = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
];

function isHour(k /* : string */, params /* : Promise */) {
  if (!HOURS.includes(params[k])) {
    return Promise.reject({
      expected: 'to be a valid hour',
      received: params[k],
      key: k,
    });
  }

  return Promise.resolve();
}

module.exports = isHour;
