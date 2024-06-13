import React from "react";
import { getNotes } from "@/utils/notes";
import Link from "next/link";
import Pagination from "@/components/pagination";
import BookNote from "@/components/BookNote";

export default async function BookNotePage({ searchParams }) {
  const tags = searchParams.tags?.split(",");
  const order = searchParams.order ?? "newest";
  const page = searchParams.page ?? 1;
  const limit = searchParams.limit ?? 6;

  const { notes, pageCount } = await getNotes({
    tags,
    newest: order === "newest",
    page,
    limit,
  });

  return (
    <div>
      <h1 className="mt-20 text-center tracking-wide text-2xl">
        Welcome to my <br />
        <span className="text-4xl font-bold "> Digital Bookshelf </span>
      </h1>
      <p className="text-center  font-light text-md  flex items-center justify-center px-2 my-5">
        I&apos;m an avid reader, always looking to learn and grow. Here, I share
        detailed notes and insights from the books I&apos;ve read, capturing the
        key ideas and lessons that have inspired me along the way.
      </p>
      <hr />

      <section>
        <div className="">
          Display&nbsp;
          {order === "newest" && (
            <Link href="/bookNote?order=oldest" className="underline">
              oldest
            </Link>
          )}
          {order === "oldest" && (
            <Link href="/bookNote?order=newest" className="underline">
              newest
            </Link>
          )}
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
          {notes.map((note) => (
            <li key={note.slug}>
              <Link
                className="flex flex-row justify-between"
                href={`/bookNote/${note.slug}`}
              >
                <BookNote note={note} />
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
