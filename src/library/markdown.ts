import rehypePrismPlus from 'rehype-prism-plus';
import rehypeCodeTitles from "rehype-code-titles";  
import { serialize } from "next-mdx-remote/serialize";
import { remark } from "remark";
import html from "remark-html";

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export async function markdownToPettyHtml(markdown: string) {
  const result = await serialize(markdown, {
    mdxOptions: {
      rehypePlugins: [rehypeCodeTitles, rehypePrismPlus],
    },
  });
  return result;
}
