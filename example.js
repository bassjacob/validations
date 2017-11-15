const {
  validatorFactory,
  validators: {
    values: { isString, isBoolean, isNumber },
    general: { nullable },
  },
} = require('./');

const example = async () => {
  const userCreateValidation = validatorFactory({
    check: {
      id: [isString].map(nullable),
      firstName: [isString],
      lastName: [isString],
      age: [isNumber].map(nullable),
      admin: [isBoolean],
    },
  });

  const validUser = {
    firstName: 'Bill',
    lastName: 'Gates',
    admin: false,
  };

  const invalidUser = {
    firstName: 'Not',
    lastName: 'Bill',
    admin: 'true',
    age: 'nine',
  };

  try {
    const res = await userCreateValidation(validUser, {});
    console.log(JSON.stringify(res, null, 2));
    /*
    {
      "firstName": "Bill",
      "lastName": "Gates",
      "admin": false
    }
    */
  } catch (ex) {
    console.log(JSON.stringify(ex, null, 2));
  }

  try {
    const res = await userCreateValidation(invalidUser, {});
    console.log(JSON.stringify(res, null, 2));
  } catch (ex) {
    console.log(JSON.stringify(ex, null, 2));
    /*
    {
      "name": "ValidationError",
      "data": {
        "age": [
          {
            "expected": "a number",
            "received": "not a number",
            "key": "age"
          }
        ],
        "admin": [
          {
            "expected": "too be a bool",
            "received": "true",
            "key": "admin"
          }
        ]
      }
    }
    */
  }
};

example();
