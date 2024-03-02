import React from "react";
import Image from "next/image";

import {
  serviceTwo,
  btnOne,
  btnTwo,
  serviceOne,
  serviceThree,
  serviceFour,
} from "@/public";
import Link from "next/link";

const EXPERTIES = () => {
  return (
    <>
      <div
        className="bg-black  p-[20px] rounded-[40px] mt-[30px]"
        id="services"
      >
        <div className="text-white block sm:flex justify-between items-center">
          <div className="text-[18px] font-bold text-center sm:text-left">
            <span>Experties</span>
          </div>
          <div className="text-center sm:text-right text-[12px] text-gray-400">
            <div className="hidden sm:block">
              <span>Transforming Ideas into Reality by combining</span>
            </div>
            <div className="hidden sm:block">
              <span>creativity, strategy and expertise.</span>
            </div>
            <div className="block sm:hidden">
              <span>
                Transforming Ideas into Reality by combining creativity,
                strategy and expertise.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[0.2px] bg-gray-400 rounded-full my-[20px] " />
        <div className="block sm:flex overflow-x-scroll items-center gap-[30px]">
          <div className="bg-[#4c4c4c]  sm:mt-0 w-full sm:min-w-[300px] p-[20px] rounded-[25px] sm:rounded-[40px]">
            <div className="flex justify-between items-center">
              <div className="text-[#9eff00] text-left text-[22px] sm:text-[28px] font-black leading-none">
                <div>
                  <span>Web</span>
                </div>
                <div>
                  <span>Designing</span>
                </div>
              </div>
              <div>
                <Link
                  href="https://www.figma.com/file/b6yxaSOE95tRX4mnEscKTP/KiskaJutta?type=design&node-id=0%3A1&mode=design&t=nWzkiu68jxXMyY0o-1"
                  target="_blank"
                >
                  <Image
                    src={btnTwo}
                    alt="btnTwo"
                    className="w-[40px] rounded-[20px]  ring-0 ring-gray-300 hover:ring-2 cursor-pointer duration-200"
                  />
                </Link>
              </div>
            </div>
            <div className="my-[5px] text-white text-left font-normal sm:font-medium text-[12px] sm:text-[13px]">
              <span>
                Crafting stunning websites that is tailored to your specific
                needs.
              </span>
            </div>
            <div className="mt-4">
              <Image
                src={serviceOne}
                alt="serviceOne"
                className="w-full object-cover h-[190px] rounded-[20px]"
              />
            </div>
          </div>
          <div className="bg-[#0066ff] relative mt-[20px] sm:mt-0 w-full sm:min-w-[300px] p-[20px] rounded-[25px] sm:rounded-[40px]  rounded-bl-[150px] sm:rounded-bl-[150px]">
            <div className="text-[#9eff00] text-left text-[22px] sm:text-[28px] font-black leading-none">
              <div>
                <span>Web</span>
              </div>
              <div>
                <span>Development</span>
              </div>
            </div>
            <div className="my-[5px] text-white text-left font-normal sm:font-medium text-[12px] sm:text-[13px]">
              <span>
                Creative ideas, amazing motions and unique way to mark your
                presence.
              </span>
            </div>
            <div className="mt-4">
              <Image
                src={serviceTwo}
                alt="serviceTwo"
                className="w-full h-[190px] object-cover rounded-[20px]  rounded-bl-[140px]"
              />
            </div>
            <div className="absolute -mt-[50px]">
              <Link href="https://pravah.skit.ac.in/" target="_blank">
                <Image
                  src={btnOne}
                  alt="btnOne"
                  className={`w-[70px] duration-200 rounded-full ring-4  ring-black hover:ring-8 cursor-pointer`}
                />
              </Link>
            </div>
          </div>
          <div className="bg-[#4c4c4c] mt-[20px] sm:mt-0 w-full sm:min-w-[300px] p-[20px] rounded-[25px] sm:rounded-[40px]">
            <div className="flex justify-between items-center">
              <div className="text-[#9eff00] text-left text-[22px] sm:text-[28px] font-black leading-none">
                <div>
                  <span>UI</span>
                </div>
                <div>
                  <span>Designing</span>
                </div>
              </div>
              <div>
                <Link
                  href="https://www.figma.com/file/sdmtlFaHjilwzSStXNGQ9z/BingoAI?type=design&node-id=0%3A1&mode=design&t=XmAdzKSuHAbL6uCx-1"
                  target="_blank"
                >
                  <Image
                    src={btnTwo}
                    alt="btnTwo"
                    className="w-[40px] rounded-[20px] ring-0 ring-gray-300 hover:ring-2 cursor-pointer duration-200"
                  />
                </Link>
              </div>
            </div>
            <div className="my-[5px] text-white text-left font-normal sm:font-medium text-[12px] sm:text-[13px]">
              <span>
                Provides best solutions by creating top-notch ui designs with
                uniqueness.
              </span>
            </div>
            <div className="mt-4">
              <Image
                src={serviceThree}
                alt="serviceThree"
                className="w-full object-cover h-[190px] rounded-[20px] "
              />
            </div>
          </div>
          <div className="bg-[#4c4c4c] mt-[20px] sm:mt-0 w-full sm:min-w-[300px] p-[20px] rounded-[25px] sm:rounded-[40px]">
            <div className="flex justify-between items-center">
              <div className="text-[#9eff00] text-left text-[22px] sm:text-[28px] font-black leading-none">
                <div>
                  <span>Poster</span>
                </div>
                <div>
                  <span>Designing</span>
                </div>
              </div>
              <div>
                <Link
                  href="https://www.figma.com/file/Qbjmn4cG0ez1be74XIppBj/Posters?type=design&node-id=0%3A1&mode=design&t=huxF98vFA8lhbyEq-1"
                  target="_blank"
                >
                  <Image
                    src={btnTwo}
                    alt="btnTwo"
                    className="w-[40px] rounded-[20px] ring-0 ring-gray-300 hover:ring-2 cursor-pointer duration-200"
                  />
                </Link>
              </div>
            </div>
            <div className="my-[5px] text-white text-left font-normal sm:font-medium text-[12px] sm:text-[13px]">
              <span>
                Unique posters that makes you to stand out among all odds.
              </span>
            </div>
            <div className="mt-4">
              <Image
                src={serviceFour}
                alt="serviceFour"
                className="w-full  h-[190px] object-cover rounded-[20px] "
              />
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EXPERTIES;
