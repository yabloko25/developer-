import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../api";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPosts().then((posts) => {
      const foundPost = posts.find((p) => p._id === id);
      setPost(foundPost);
    });
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>Post Detail</h2>
      <p>{post.text}</p>
    </div>
  );
};

export default PostDetail;