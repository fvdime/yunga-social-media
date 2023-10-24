const url = `${process.env.NEXT_PUBLIC_API_URL}/users`

const getUser = async (userId) => {
  try {
    const res = await fetch(`${url}/${userId}`)
  
    return res.json()
  } catch (error) {
    return <></>
  }
}

export default getUser;