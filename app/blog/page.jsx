import React from "react";

import { getPosts } from "@/utils/posts";
import Link from "next/link";
import Pagination from "@/components/pagination";

export default async function BlogPage({ searchParams }) {
  const tags = searchParams.tags?.split(",");
  const order = searchParams.order ?? "newest";
  const page = searchParams.page ?? 1;
  const limit = searchParams.limit ?? 3;

  const { posts, pageCount } = await getPosts({
    tags,
    newest: order === "newest",
    page,
    limit,
  });
  return (
    <div>
      <h1>Recent posts</h1>
      <p>Here are my recent writtings</p>
      <hr />

      <section>
        <div className="my-8">
          Display&nbsp;
          {order === "newest" && (
            <Link href="/blog?order=oldest" className="underline">
              oldest
            </Link>
          )}
          {order === "oldest" && (
            <Link href="/blog?order=newest" className="underline">
              newest
            </Link>
          )}
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                className="flex flex-row justify-between"
                href={`/blog/${post.slug}`}
              >
                <h1>{post.frontmatter.title}</h1>
                <span>{post.frontmatter.date}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Pagination pageCount={pageCount} />
        </div>
      </section>
    </div>
  );
}
