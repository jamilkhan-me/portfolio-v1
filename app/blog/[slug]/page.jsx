import { getPost } from "@/utils/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import rehypeHighlight from "rehype-highlight";

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

export async function generateMetadata({ param }) {
  try {
    const { frontmatter } = await getPost(param.slug);

    return frontmatter;
  } catch (error) {}
}

export default async function BlogPageDetails({ params }) {
  const post = await getPost(params.slug);

  return (
    <article className="prose">
      <div className="flex space-x-2 my-8">
        {post.frontmatter.tags.map((tag) => (
          <Link href={`/blog/?tags=${tag}`}>{tag}</Link>
        ))}
      </div>

      {post.content}
    </article>
  );
}
