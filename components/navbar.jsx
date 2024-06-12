import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-4xl mx-auto lg:flex w-full justify-between my-4 flex flex-row">
      <div className="flex flex-row space-x-4 sm:space-x-8 items-center px-4 md:px-0 py-2  ">
        {navigation.map((project) => (
          <Link
            className="font-bold flex items-center justify-center space-x-2"
            key={project.title}
            href={project.link}
          >
            <span className="text-md hover:underline relative">
              {project.title}
            </span>
          </Link>
        ))}
      </div>
      <div>
        <Link
          className="font-bold px-4 py-2   text-sm flex items-center justify-center space-x-2"
          href={""}
        >
          <span className="text-sm hover:underline relative">Download CV</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

export const navigation = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Blog", link: "/blog" },
  { title: "Project", link: "/project" },
  { title: "Book Note", link: "/bookNote" },
];
