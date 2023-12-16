import React from "react";
import Image from "next/image";
import { photo, services } from "@/public";

const SELF_INTRO = () => {
  return (
    <>
      <div className="flex text-left justify-center sm:justify-between items-center mt-[50px]">
        <div className="text-center sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <Image src={photo} alt="photo" className="w-[60px] sm:w-[80px]" />
          </div>
          <div>
            <span className="text-[14px] md:text-[16px] font-bold">Prashant Singh</span>
          </div>
          <div className="leading-none">
            <span className="text-[12px] md:text-[13px]">
              Amplify brands by crafting unique and compelling
              <br className="hidden sm:block" />
              brand identities that leaves a lasting impact.
            </span>
          </div>
        </div>
        <div className="hidden sm:block">
          <Image
            src={services}
            alt="services"
            className="w-[80px] lg:w-[90px] animate-spin-two"
          />
        </div>
      </div>
    </>
  );
};

export default SELF_INTRO;
