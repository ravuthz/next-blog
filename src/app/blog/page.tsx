// import PostShow from "@/components/PostShow";

import PostShow from "@/components/PostShow";
import { getAllPosts } from "@/library/api";

export default function Blog() {
  const posts = getAllPosts(["slug", "date", "title", "excerpt", "coverImage"]);

  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-3 lg:gap-8 gap-8">
        {posts.map((post, index) => (
          <PostShow key={index} post={post} />
        ))}
      </div>
    </div>
  );
}
