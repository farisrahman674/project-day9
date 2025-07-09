import { useParams } from "react-router-dom";
import { posts } from "@/data/posts";

export default function PostDetail() {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === Number(postId));
  if (!post) {
    return <p>Post tidak ditemukan</p>;
  }

  return (
    <div className="mt-8 p-4 border rounded bg-gray-100">
      <h2 className="text-2xl font-semibold mb-2">Post Detail</h2>
      <p>
        Showing details for post ID: <span className="font-mono">{postId}</span>
      </p>
      <p className="mt-2 text-gray-700">{post.body}</p>
    </div>
  );
}
