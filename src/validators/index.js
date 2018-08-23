const deepEqual = require('./deep-equal');
const equal = require('./equal');
const lessThan = require('./less-than');
const lessThanOrEqual = require('./less-than-or-equal');
const greaterThan = require('./greater-than');
const greaterThanOrEqual = require('./greater-than-or-equal');

const isArray = require('./is-array');
const isBoolean = require('./is-boolean');
const isDate = require('./is-date');
const isDifferent = require('./is-different');
const isIn = require('./is-in');
const isNumber = require('./is-number');
const isString = require('./is-string');
const isObject = require('./is-object');
const isPresent = require('./is-present');
const isSame = require('./is-same');
const isHour = require('./is-hour');
const isMinute = require('./is-minute');

const immutable = require('./immutable');
const each = require('./each');
const length = require('./length');
const nullable = require('./nullable');
const oneOf = require('./one-of');

const matches = require('./matches');

const sequelize = require('./sequelize');

const validators = {
  equality: {
    deepEqual,
    equal,
    lessThan,
    lessThanOrEqual,
    greaterThan,
    greaterThanOrEqual,
  },
  values: {
    isArray,
    isBoolean,
    isDifferent,
    isIn,
    isNumber,
    isString,
    isObject,
    isPresent,
    isSame,
    isDate,
    isHour,
    isMinute,
  },
  iterators: {
    each,
    length,
  },
  general: {
    immutable,
    nullable,
    oneOf,
  },
  string: {
    matches,
  },
  custom: {
    sequelize,
  },
};

module.exports = validators;
