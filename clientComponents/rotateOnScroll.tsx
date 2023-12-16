"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { scroll } from "@/public";

const ROTATE_IMAGE = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        setRotate(window.scrollY / 2);
      };
    }
  }, []);

  return (
    <>
      <div className="flex z-50 justify-center fixed left-[50%] bottom-2 -translate-x-[50%]">
        <Image
          src={scroll}
          alt="scroll"
          className="w-[30px]"
          id="rotateScroll"
          style={{ rotate: `${rotate}deg` }}
        />
      </div>
    </>
  );
};

export default ROTATE_IMAGE;
