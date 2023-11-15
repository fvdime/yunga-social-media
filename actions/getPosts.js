const url = `${process.env.NEXT_PUBLIC_API_URL}/post`

export default async function getPosts() {
  try {
    const res = await fetch(url)

    return res.json()
  } catch (error) {
    return null;
  }
}
