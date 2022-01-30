const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = "This is very secret";
const expiration = "2h";

module.exports = {
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
  getUser: (token) => {
    if (token) {
      try {
        const { data } = jwt.verify(token, secret, { maxAge: expiration });
        return data;
      } catch (err) {
        console.log(err);
        return null;
      }
    }
  },
};
