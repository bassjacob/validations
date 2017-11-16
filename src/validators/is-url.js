const url = require('url');

async function isUrl(k /* : string */, params /* : Promise */) {
  try {
    url.parse(params[k]);
    return Promise.resolve();
  } catch (ex) {
    return Promise.reject({
      expected: 'to be url',
      key: k,
      received: 'not url',
    });
  }
}

module.exports = isUrl;
