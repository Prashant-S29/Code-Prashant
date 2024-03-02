"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { github_logo, visit_link } from "@/public";
import { projectList } from "@/constant";

const PROJECTS = () => {
  const [active, setActive] = useState(1);
  const [showVistOption, setShowVistOption] = useState(false);

  return (
    <>
      <div className="w-full flex justify-center items-center" >
        <div className="text-center w-full">
          <div className="my-[10px]">
            <span className="text-[32px] font-black">Projects</span>
          </div>
          <div className="w-full flex justify-center overflow-x-scroll">
            <div className="flex w-[1200px] justify-center  items-center  h-[500px] bg-white text-black rounded-[60px] overflow-hidden">
              {projectList.map((projectDetail, index) => (
                <div
                  key={index}
                  className={`bg-black relative border-gray-400 border-y-0 overflow-hidden  border-r-[0.5px] h-full duration-500 ${
                    active === index
                      ? "w-[500px]  cursor-default"
                      : "w-[80px] lg:w-[100px] cursor-pointer"
                  }`}
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  {active === index && (
                    <div className="text-white">
                      <div
                        className="p-[20px]   flex justify-center items-center cursor-pointer  rounded-[20px] "
                        onMouseEnter={() => {
                          setShowVistOption(!showVistOption);
                        }}
                        onMouseLeave={() => {
                          setShowVistOption(!showVistOption);
                        }}
                      >
                        <div>
                          <Image
                            src={projectDetail.projectImage}
                            alt="serviceOne"
                            className={`rounded-[20px] ${
                              index === 0
                                ? "rounded-tl-[40px]"
                                : "rounded-tl-[20px]"
                            }
                            ${
                              index === projectList.length - 1
                                ? "rounded-tr-[40px]"
                                : "rounded-tr-[20px]"
                            } h-[250px] duration-300 object-cover object-center ${
                              showVistOption
                                ? "opacity-50 blur-[3px]"
                                : "opacity-100"
                            }`}
                          />
                        </div>
                        <div
                          className={`absolute duration-300 ${
                            showVistOption ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <div className="flex justify-center items-center gap-2 p-1 rounded-full bg-white ">
                            {projectDetail.projectGithubLink && (
                              <Link
                                href={projectDetail.projectGithubLink}
                                target="_blank"
                              >
                                <div className="bg-black w-fit rounded-full">
                                  <Image
                                    src={github_logo}
                                    alt="github"
                                    className="w-[30px]"
                                  />
                                </div>
                              </Link>
                            )}
                            <div className="bg-black w-fit rounded-full">
                              <Link
                                href={projectDetail.projectLink}
                                target="_blank"
                              >
                                <Image
                                  src={visit_link}
                                  alt="github"
                                  className="w-[30px]"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex overflow-x-scroll whitespace-nowrap gap-2 items-center px-[20px]">
                        {projectDetail.projectTags.map((tag, index) => (
                          <div
                            key={index}
                            className="px-[15px] leading-none py-2 flex justify-center items-center  rounded-full bg-gray-600 "
                          >
                            <span className="text-[11px] uppercase font-semibold">
                              #{tag}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-[10px] px-[20px] text-[14px]">
                        <span>{projectDetail.projectDesc}</span>
                      </div>
                    </div>
                  )}
                  <div
                    className={` font-black text-center w-full whitespace-nowrap  uppercase
                   duration-200 ${
                     active === index
                       ? "text-white rotate-0 mb-0 text-[22px] lg:text-[28px]"
                       : "text-gray-600 text-[18px] lg:text-[22px] -rotate-90  mb-[50px]"
                   } absolute z-20 bottom-5`}
                  >
                    <span className="">{projectDetail.projectTitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PROJECTS;
