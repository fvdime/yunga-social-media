const url = `${process.env.NEXT_PUBLIC_API_URL}/users`

export default async function getUsers() {
  try {
    const res = await fetch(url)

    return res.json()
  } catch (error) {
    return null;
  }
}
