import React from "react";

const ProjectCard = () => {
  return (
    <div className="relative group block p-2">
      <div className="rounded-2xl overflow-hidden bg-zinc-300 border border-transparent group-hover:border-zinc-500  ">
        <div className="h-60  w-full transition duration-500 group-hover:bg-transparent ">
          <img
            src="/Recipe-app.png"
            alt="Recipe app"
            className=" h-60 w-full object-cover object-center  "
          />
        </div>
        <div className="p-4 bg-zinc-200 ">
          <h4 className="text-zinc-700 font-bold tracking-wide mt-4 ">
            Algochurn
          </h4>
          <p className="mt-8 text-zinc-600 tracking-wide leading-relaxed text-sm ">
            A web app that allows users to practice for front-end and UI
            interviews
          </p>
          <div className="flex flex-row flex-wrap mt-8">
            <div>
              <span className="text-gray-500 mr-4 inline-block stroke-1">
                💻
              </span>
            </div>
            <div>
              <span className="text-gray-500 mr-4 inline-block stroke-1">
                💻
              </span>
            </div>
            <div>
              <span className="text-gray-500 mr-4 inline-block stroke-1">
                💻
              </span>
            </div>
            <div>
              <span className="text-gray-500 mr-4 inline-block stroke-1">
                💻
              </span>
            </div>
          </div>
          <div className="flex flex-row space-x-2 mt-4 items-center px-0.5">
            <span>💾</span>
            <p className="text-zinc-500 group-hover:text-cyan-500 text-xs">
              View Source
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
