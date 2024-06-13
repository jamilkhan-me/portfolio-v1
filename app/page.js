import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="mb-8">
        <h1>Hey I'm Jamil Khan</h1>
        <p>My name is Jamil Khan, I am a web developer.</p>
        <p>
          Checkout my{" "}
          <Link href="/project" className="underline">
            projects
          </Link>
          ,{" "}
          <Link href="/bookNote" className="underline">
            Book notes
          </Link>{" "}
          and{" "}
          <Link href="/blog" className="underline">
            blog
          </Link>
          .
        </p>
      </section>
      <section>
        <h2 className="text-lg mb-8">Latest on the blog</h2>
        <ul className="font-mono"></ul>
      </section>
    </main>
  );
}
