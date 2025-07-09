import { Link, Outlet } from "react-router-dom";
import { posts } from "@/data/posts";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export default function Post() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-3xl font-bold">Blog Home</h1>
      {posts.map((post) => (
        <Card key={post.id}>
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500">{post.body.slice(0, 60)}...</p>
            <Link to={`/post/${post.id}`}>
              <Button className="mt-2">Baca Selengkapnya</Button>
            </Link>
          </CardContent>
        </Card>
      ))}
      <Outlet />
    </div>
  );
}
