import React from "react";
import Image from "next/image";

import { logo, figmaOne, photoOne, star } from "@/public";

const MAIN_TEXT = () => {
  return (
    <>
      <div>
        <div>
          <span className="text-[12px] sm:text-[14px]">
            Crafting Stunning websites that Inspires.
          </span>
        </div>
        <div className="text-[30px] sm:text-[42px] lg:text-[56px] font-black leading-tight">
          <div className="flex justify-center items-center gap-3">
            <div>
              <span>Elevate Your</span>
            </div>
            <div className="hidden sm:block  figma-logo-animation">
              <Image
                src={figmaOne}
                alt="figmaOne"
                className="w-[50px] lg:w-[80px] rotate-[32deg] "
              />
            </div>
          </div>
          <div className="flex justify-center items-center gap-2 sm:gap-3">
            <div>
              <span>Online</span>
            </div>
            <div className="hidden sm:flex justify-center">
              <Image
                src={logo}
                alt="logo"
                className="w-[40px] lg:w-[60px] animate-spin-one"
              />
            </div>
            <div>
              <span>Presence</span>
            </div>
          </div>
          <div>
          
            <span>with my</span>
          </div>
          <div className="flex relative justify-center items-center gap-3 ">
            <div className="px-[10px] py-[6px] rounded-[20px] text-white rotate-[10deg] bg-[#9eff00] w-fit">
              <span>Creative</span>
            </div>
            <div>
              <span>Magic</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MAIN_TEXT;
