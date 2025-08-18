const jwt = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET || 'devsecret'
module.exports = {
  sign: (payload, opts={}) => jwt.sign(payload, SECRET, {...opts, expiresIn:'7d'}),
  verify: (token)=> jwt.verify(token, SECRET)
}

