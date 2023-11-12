import { jwtVerify } from "jose";

export function getJWTSecretKey() {
  const secret =process.env.JWT_ACCESS_TOKEN_KEY;

  if (!secret) {
    throw new Error('Not authorized!')
  }

  return TextEncoder().encode(secret)
}

export async function verifyJWTToken(token) {
try {
  const { payload } = await jwtVerify(token, getJWTSecretKey())

  return payload
} catch (error) {
  console.log(error)
  return null
}
}