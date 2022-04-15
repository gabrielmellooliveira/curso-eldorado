const jwt = require('jsonwebtoken')

const AccessTokenManager = require('../../application/security/AccessTokenManager')

const JWT_SECRET_KEY = 'shhhhhh!'

class JwtAccessTokenManager extends AccessTokenManager {
  generate(payload) {
    return jwt.sign(payload, JWT_SECRET_KEY)
  }

  decode(accessToken) {
    return jwt.verify(accessToken, JWT_SECRET_KEY)
  }
}

module.exports = JwtAccessTokenManager