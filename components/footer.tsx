import React from "react";
import Link from "next/link";
import Image from "next/image";

import { logo } from "@/public";
import { contactDetails } from "@/constant";

import FOOTER_MARQUEE from "@/clientComponents/footerMarquee";

const FOOTER = () => {
  return (
    <>
      <div
        className="bg-black text-white rounded-[40px] m-[20px] p-[20px] sm:p-[30px]"
        id="contact"
      >
        <div className="block md:flex gap-[50px] items-start">
          <div className=" block md:flex text-center md:text-left justify-left gap-2 items-center">
            <div className="flex justify-center">
              <Image
                src={logo}
                alt="logo"
                className="w-[60px] animate-spin-one"
              />
            </div>
            <div className="mt-[10px] md:mt-0">
              <div className="md:leading-normal leading-none">
                <span className="text-[16px] font-bold">Code-Prashant</span>
              </div>
              <div className="leading-none">
                <span className="text-[12px] text-gray-300">
                  Web Designer | Web Developer
                </span>
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-evenly">
            <div>
              <div className="whitespace-nowrap">
                <span className="font-bold text-[15px]">Quick Links</span>
              </div>
              <div className="mt-[10px] text-[13px] text-gray-300">
                <ul>
                  <li className="mt-[5px]">
                    <Link href="">Home</Link>
                  </li>
                  <li className="mt-[5px]">
                    <Link href="">About</Link>
                  </li>
                  <li className="mt-[5px]">
                    <Link href="">Services</Link>
                  </li>
                  <li className="mt-[5px]">
                    <Link href="">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="block md:hidden lg:block mt-[20px] md:mt-0">
            <SUBSCRIBE_FORM />
          </div> */}
          <div className="text-center md:text-left mt-[10px] md:mt-0">
            <div>
              <span className="font-bold text-[15px]">
                Become a Friend<span className="text-red-500"> .</span>
              </span>
            </div>
            <div className="leading-tight mt-0 md:mt-[10px]">
              <span className="text-[13px] text-gray-300">
                Follow me and get notified about my latest{" "}
                <br className="hidden lg:block" /> projects and updates.
              </span>
            </div>
          </div>
        </div>
        <div>
          <FOOTER_MARQUEE />
        </div>
        <div className="w-full h-[0.5px] bg-gray-500 rounded-full my-[10px]" />
        <div className="block md:flex justify-between items-center">
          <div className="hidden md:block text-[11px] text-gray-400">
            <div>
              <span>&copy; Copyright 2023</span>
            </div>
            <div>
              <span>All rights are reserved under CODE PRASHANT</span>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <ul className="flex gap-x-2">
              {contactDetails.map((details, index) => (
                <li key={index}>
                  <Link href={details.contactLink}>
                    <Image
                      src={details.contactIcon}
                      alt="logo"
                      className="w-[25px]"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="block md:hidden text-[11px] mt-[10px] md:mt-0 text-center md:text-left text-gray-400">
            <div>
              <span>&copy; Copyright 2023</span>
            </div>
            <div>
              <span>All rights are reserved under CODE PRASHANT</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FOOTER;
