"use client";

import React, { useState } from "react";
import Image from "next/image";

import { logo, dropDown } from "@/public";
import { navLinks } from "@/constant";

import NAVLINK from "@/clientComponents/navlink";
import Link from "next/link";

const NAVBAR = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <nav className="w-full z-50 h-[60px] sticky top-0 bg-white flex  justify-between md:justify-normal items-center  px-[20px] py-[8px] border-b">
        <div className="flex justify-center items-center gap-2">
          <div>
            <Image
              src={logo}
              alt="logo"
              className="w-[35px] sm:w-[40px] aspect-square"
            />
          </div>
          <div className="leading-none">
            <span className="text-[16px] sm:text-[18px] font-bold">
              Code-Prashant
            </span>
          </div>
        </div>
        <div className="w-[0.5px] mx-[20px] h-[20px] bg-black hidden md:flex" />
        <div className="justify-center gap-3 items-center hidden md:flex">
          {navLinks.map((linkInfo, index) => (
            <div key={index}>
              <Link href={`${linkInfo.href}`}>
                <NAVLINK href={linkInfo.href} text={linkInfo.text} />
              </Link>
            </div>
          ))}
        </div>
        <div className="block md:hidden">
          <div
            className=""
            onClick={() => {
              setActive(!active);
            }}
          >
            <div
              className={`${active ? "-rotate-90" : "rotate-90"} duration-300`}
            >
              <Image src={dropDown} alt="dropDown" className="w-[24px]" />
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`flex justify-end ${
          active ? "mr-0" : "-mr-[150px]"
        } duration-300`}
      >
        <div className={`w-[150px]   h-[100vh] bg-black fixed z-40 p-[20px]`}>
          <div>
            {navLinks.map((linkInfo, index) => (
              <div
                key={index}
                className="mt-[10px]"
                onClick={() => {
                  setActive(false);
                }}
              >
                <Link href={`${linkInfo.href}`}>
                  <NAVLINK
                    href={linkInfo.href}
                    text={linkInfo.text}
                    linkColor="#ffffff"
                    lineColor="#ffffff"
                  />
                </Link>
              </div>
            ))}
          </div>

          <div className="absolute bottom-[100px] flex justify-center gap-2 leading-none items-center">
            <div>
              <Image src={logo} alt="logo" className="w-[40px]" />
            </div>
            <div>
              <div>
                <span className="text-white font-semibold text-[14px]">
                  Code
                </span>
              </div>
              <div>
                <span className="text-white font-semibold text-[14px]">
                  Prashant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NAVBAR;
