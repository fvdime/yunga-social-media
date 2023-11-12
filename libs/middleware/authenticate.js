import jwt from "jsonwebtoken";

const authenticate = async (req) => {
  const token =
    req?.cookies?.get("accessToken")?.value ||
    req?.headers?.get("authorization")?.split(" ")[1];
  console.log("Token", token);

  const decoded = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY);
  req.user = { ...decoded.user };
  return req;
};

export default authenticate;
