module.exports = {
  request: require("./request"),
  response: require("./response"),
};

/* version 2

const request = require("./request")
const response = require("./response")

module.exports = {
    send:request.send,
    read: response.read,
}

*/

/* version 3

const request = require("./request")
const response = require("./response")

module.exports = {
    ...require('./request'),
    ...require('./response')
}

*/
