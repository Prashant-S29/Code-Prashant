"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const maqueeText = [
  "Web Design",
  "Web Development",
  "Branding",
  "Site Promotion",
  "UI Designing",
  "Hosting and Server Management",
];

const FOOTER_MARQUEE = () => {
  return (
    <>
      <div className="mt-[10px]">
        <Marquee autoFill speed={40}>
          <div className="flex items-center">
            {maqueeText.map((text, index) => (
              <div key={index} className="px-[20px]">
                <span className="text-[13px] uppercase font-semibold">{text}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default FOOTER_MARQUEE;
