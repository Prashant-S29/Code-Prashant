"use client";

import { projectList } from "@/constant";
import { dropDown, github_logo, visit_link } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PROJECTS_MOBILE = () => {
  const [isActive, setIsActive] = useState(1);

  const handleActiveInc = () => {
    if (isActive === projectList.length - 1) {
      setIsActive(0);
      return;
    }
    setIsActive(isActive + 1);
    // console.log(isActive);
  };

  const handleActiveDec = () => {
    if (isActive === 0) {
      setIsActive(projectList.length - 1);
      return;
    }
    setIsActive(isActive - 1);
    // console.log(isActive);
  };

  return (
    <>
      <div className="my-[10px]">
        <span className="text-[22px] font-black">Projects</span>
      </div>
      <div
        className="w-full flex justify-center h-[450px] rounded-[30px] overflow-hidden "
        id="projects"
      >
        {projectList.map((projectDetail, index) => (
          <div
            key={index}
            className={` overflow-hidden duration-200 h-fit rounded-[30px]   ${
              isActive === index
                ? "w-full p-[20px] opacity-100"
                : "w-0 opacity-0"
            } bg-black text-white `}
          >
            <div>
              <Image
                src={projectDetail.projectImage}
                alt="service"
                className="w-full h-[200px] object-cover rounded-[15px]"
              />
            </div>
            <div className="flex justify-normal gap-2 mt-[10px] overflow-x-scroll p-0">
              {projectDetail.projectTags.map((tag, index) => (
                <div
                  key={index}
                  className="px-[15px] whitespace-nowrap leading-none py-2 flex  text-white justify-center items-center  rounded-full bg-gray-600 "
                >
                  <span className="text-[11px] uppercase font-semibold">
                    #{tag}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center mb-[10px]">
              <div className="flex  justify-center items-center gap-2 p-1 rounded-full bg-white ">
                {projectDetail.projectTags.includes("web dev") && (
                  <Link href={projectDetail.projectGithubLink} target="_blank">
                    <div className="bg-black w-fit rounded-full">
                      <Image
                        src={github_logo}
                        alt="github"
                        className="w-[25px]"
                      />
                    </div>
                  </Link>
                )}
                <div className="bg-black w-fit rounded-full">
                  <Link href={projectDetail.projectLink} target="_blank">
                    <Image src={visit_link} alt="github" className="w-[25px]" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="leading-tight h-[80px] overflow-y-scroll">
              <span className="text-[13px]">{projectDetail.projectDesc}</span>
            </div>
            <div>
              <span className="text-[22px] font-black">
                {projectDetail.projectTitle}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="my-[10px] flex justify-center items-center gap-3">
        <div>
          <Image
            src={dropDown}
            alt="dropDown"
            className="w-[25px] rotate-90"
            onClick={handleActiveDec}
          />
        </div>
        <div>
          <Image
            src={dropDown}
            alt="dropDown"
            className="w-[25px] -rotate-90"
            onClick={handleActiveInc}
          />
        </div>
      </div>
    </>
  );
};

export default PROJECTS_MOBILE;
