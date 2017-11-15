# Maccabee

Maccabee is a validation library for Javascript

### Install

```shell
yarn add maccabee
```

or
```shell
npm i maccabee -S
```

### How to use

Using Maccabee validatorFactory & built in validators

```javascript
  const {
    validatorFactory,
    validators: {
      values: { isString, isBoolean, isNumber },
      general: { nullable },
    },
  } = require('maccabee');

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
    firstName: 'Barack',
    lastName: 'Obama',
    admin: true,
  };

  const invalidUser = {
    firstName: 'Donald',
    lastName: 'Trump',
    admin: 'false',
    age: 'covfefe',
  };

  try {
    const res = await userCreateValidation(validUser, {});
    console.log(JSON.stringify(res, null, 2));
    /*
    {
      "firstName": "Barack",
      "lastName": "Obama",
      "admin": true
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
            "expected": "to be a bool",
            "received": "false",
            "key": "admin"
          }
        ]
      }
    }
    */
  }
```