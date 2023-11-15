import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_API_URL}/getByToken`

const getCurrentUser = async (token) => {
  if (!token) {
    return {}
  }

  const res = await axios.get("http://localhost:3000/api/getByToken", {
    headers: { Authorization: 'Bearer ' + token },
}
);
if (res?.data?.success) return res.data?.data;
return {};
}

export default getCurrentUser;