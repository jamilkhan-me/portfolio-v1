import { getNote } from "@/utils/notes";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import BookNote from "@/components/BookNote";

export default async function BookNoteContent({ params }) {
  const note = await getNote(params.slug);

  return (
    <div className="max-w-4xl mx-auto mt-10  px-8">
      <div className="flex flex-row space-x-10 ">
        <div className="flex flex-col justify-center">
          <h1>Book Summary</h1>
          <h1 className="text-4xl text-zinc-800 font-semibold my-2">
            {note.frontmatter.title}
          </h1>
          <h2>By {note.frontmatter.author}</h2>
          <small className=" mt-5  text-zinc-700 text-md font-light tracking-wide block">
            Date Read: {note.frontmatter.date}
          </small>
          <small className="  text-zinc-700 text-md font-light tracking-wide block my-4">
            Genre:
            <span>
              {note.frontmatter.tags.map((tag) => (
                <Link
                  className=" px-3"
                  key={`${Math.floor(Math.random() * 1)}`}
                  href={`/bookNote/?tags=${tag}`}
                >
                  {tag},
                </Link>
              ))}
            </span>
          </small>
        </div>
        <Image
          src={note.frontmatter.image}
          alt={note.frontmatter.title}
          width={400}
          height={500}
          className="w-36 h-60 rounded-lg border-2 border-slate-700"
        />
      </div>
      <hr className="mt-5" />
      <article className="mt-10 prose dark:prose-invert">
        {note.content}
      </article>
    </div>
  );
}
