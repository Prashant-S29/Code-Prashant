import React from "react";
import Image from "next/image";

import { techStack } from "@/constant";
import ICON_MARQUEE from "./iconMarquee";
import Link from "next/link";

const ABOUTME = () => {
  return (
    <>
      <div className="mt-[30px]" id="about">
        <div>
          <span className="font-medium text-[14px] sm:text-[16px]">
            About Me{" "}
          </span>
        </div>
        <div className="leading-tight">
          <span className="text-[30px] sm:text-[38px] md:text-[42px] lg:text-[56px] font-black">
            I{"'"}m <span className="name_text">Prashant Singh</span>
          </span>
        </div>
        <div>
          <span className="font-bold text-[14px] sm:text-[16px]">
            Freelance Web Developer & Designer
          </span>
        </div>
        <div>
          <span className="text-[15px] sm:text-[14px]">
            crafting wonders since 2023
          </span>
        </div>
        <div className="flex justify-center mt-[10px]">
          <div className="w-[450px] text-[13px] sm:text-[15px]">
            <span className="">
              My Goal is to bring your vision to life by creating awe-inspiring
              websites and deliver top-notch design solutions tailored to your
              specific needs.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex  my-[20px] justify-center items-center gap-3 p-[4px] rounded-full border-2 border-[#1400ff] ">
            <div>
              <Link href="mailto:codeprashant29@gmail.com">
                <button className="px-[15px] sm:px-[20px] py-[6px] sm:py-[8px] bg-[#1400ff] text-white font-semibold text-[13px] rounded-full">
                  Work with Me
                </button>
              </Link>
            </div>
            <div>
              <Link href="#contact">
                <button className="px-[15px] sm:px-[20px] py-[6px] sm:py-[8px] hover:bg-[#ccc7ff] duration-200 text-[#1400ff] font-semibold text-[13px] rounded-full">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
        <ICON_MARQUEE />
      </div>
    </>
  );
};

export default ABOUTME;
