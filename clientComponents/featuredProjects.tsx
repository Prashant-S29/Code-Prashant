"use client";

import { featuredProject } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FEATURED_PROJECTS = () => {
  return (
    <>
      <div className="text-center mt-[50px] leading-tight" id="projects">
        <span className="text-[32px] font-black">Featured Projects</span>
      </div>
      <div className="flex flex-wrap  justify-center gap-x-[50px] gap-y-[20px] p-5 pt-0">
        {featuredProject.map((project, index) => (
          <div key={index} className="w-[300px] sm:w-[480px] p-5 text-left">
            <div>
              <Image
                src={project.projectImage}
                alt="serviceOne"
                className={`rounded-[20px] w-[280px] sm:w-[440px] h-[220px] sm:h-[380px] duration-300 object-cover object-top`}
              />
            </div>
            <div className="p-2">
              <div>
                <span className="text-[16px] font-bold">
                  {project.projectTitle}
                </span>
              </div>
              <div className="leading-[17px] line-clamp-3">
                <span className="text-[13px] text-gray-500">
                  {project.projectDesc}
                </span>
              </div>
              <div className="flex gap-3 mt-2">
                <Link
                  href={project.projectLink}
                  target="_blank"
                  className="px-[15px] leading-none py-2 flex text-[11px] uppercase font-semibold justify-center items-center  rounded-full bg-gray-200 "
                >
                  see live
                </Link>
                <Link
                  href={project.projectGithubLink}
                  target="_blank"
                  className="px-[15px] leading-none py-2 flex text-[11px] uppercase font-semibold justify-center items-center  rounded-full bg-gray-200 "
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FEATURED_PROJECTS;
