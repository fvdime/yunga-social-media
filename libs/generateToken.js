import * as JWT from 'jsonwebtoken'

export const generateAccessToken = (user) => {
  return JWT.sign(
    { ...user, }, process.env.JWT_ACCESS_TOKEN_KEY, { expiresIn: '30d' }
    )
}

export const generateRefreshToken = (user) => {
  return JWT.sign(
    { ...user, }, process.env.JWT_REFRESH_TOKEN_KEY, { expiresIn: '30d' }
    )
}