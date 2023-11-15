const url = `${process.env.NEXT_PUBLIC_API_URL}/post`;

const getPost = async (postId) => {
  try {
    const res = await fetch(`${url}/${postId}`);

    return res.json();
  } catch (error) {
    return <></>;
  }
};

export default getPost;
