/* eslint-disable @next/next/no-img-element */
import ContentMarkdown from "@/components/ContentMarkdown";

import { getPostBySlug } from "@/library/api";
import { Gravatar } from "@/components/Gravatar";
import { DateFormatter } from "@/components/DateFormatter";
import { markdownToPettyHtml } from "@/library/markdown";

export default async function Post({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, [
    "slug",
    "date",
    "title",
    "excerpt",
    "coverImage",
    "author",
    "authorEmail",
    "authorImage",
    "content",
  ]);

  const html = await markdownToPettyHtml(post.content);

  return (
    <div>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
      <div className="prose dark:prose-dark max-w-none w-full">
        <div className="w-full">
          <h3 className="text-2xl">{post.title}</h3>

          <div className="flex items-center space-x-4 my-4">
            <Gravatar
              className="w-12 h-12 rounded-full"
              name={post.author}
              email={post.authorEmail}
              image={post.authorImage}
            />
            <div className="font-medium dark:text-white">
              <div className="text-gray-400">{post.author}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                <DateFormatter dateString={post.date} />
              </div>
            </div>
          </div>
          <div className="py-4">
            <ContentMarkdown {...html}></ContentMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
