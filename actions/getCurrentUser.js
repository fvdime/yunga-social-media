const url = `${process.env.NEXT_PUBLIC_API_URL}/getByToken`

const getCurrentUser = async () => {
  try {
    const res = await fetch(`${url}`)
    console.log(res)
  
    return res.json()
  } catch (error) {
    return <></>
  }
}

export default getCurrentUser;