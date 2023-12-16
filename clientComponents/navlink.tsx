"use client";

import React, { useState } from "react";
import Link from "next/link";

const NAVLINK = ({
  href,
  text,
  linkColor = "#000000",
  lineColor = "#000000",
}: {
  href: string;
  text: string;
  linkColor?: string;
  lineColor?: string;
}) => {
  const [lineLength, setLineLength] = useState(false);

  return (
    <>
      <div
        onMouseEnter={(e) => setLineLength(!lineLength)}
        onMouseLeave={(e) => setLineLength(!lineLength)}
        className="cursor-pointer "
      >
        <Link href={`/${href}`}>
          <div className="flex relative" style={{ color: linkColor }}>
            <div>
              <div>
                <span className="font-medium text-[13px] sm:text-[14px] leading-tight md:leading-normal ">
                  {text}
                </span>
              </div>
              <div
                className={`h-[1.5px] absolute rounded-full bg-[${lineColor}] duration-150`}
                style={
                  lineLength
                    ? { width: "100%", backgroundColor: lineColor }
                    : { width: "0px", backgroundColor: lineColor }
                }
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default NAVLINK;
