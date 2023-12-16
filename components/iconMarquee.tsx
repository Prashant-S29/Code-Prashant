import React from "react";
import Image from "next/image";

import { techStack } from "@/constant";
import Marquee from "react-fast-marquee";

const ICON_MARQUEE = () => {
  return (
    <>
      <div className="hidden sm:block my-[20px]">
        <Marquee autoFill={true} speed={30} gradient={true} gradientWidth={300}>
          <div className="flex justify-center items-center">
            {techStack.map((techImage, index) => (
              <div key={index} className="px-[40px]">
                <Image
                  src={techImage}
                  alt="hello"
                  className="w-[40px] grayscale hover:grayscale-0 duration-200"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="block sm:hidden my-[20px]">
        <Marquee autoFill={true} speed={30} gradient={true} gradientWidth={20}>
          <div className="flex justify-center items-center">
            {techStack.map((techImage, index) => (
              <div key={index} className="px-[20px]">
                <Image
                  src={techImage}
                  alt="hello"
                  className="w-[35px] grayscale hover:grayscale-0 duration-200"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default ICON_MARQUEE;
