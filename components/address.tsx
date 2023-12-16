import React from "react";
import Image from "next/image";
import { map } from "@/public";

const ADDRESS = () => {
  return (
    <>
      <div className="text-[11px] sm:text-[12px] w-full flex gap-1 justify-end py-[10px]">
        <div className="flex gap-2  items-center px-[7px] sm:px-[10px] py-[3px] sm:py-[5px] border-2 border-blue-700 rounded-full">
          <div>
            <Image src={map} alt="map" className="w-[15px]" />
          </div>
          <div>
            <span className="font-medium">Jagatpura, Jaipur</span>
          </div>
        </div>
        <div className="flex gap-2  items-center px-[7px] sm:px-[10px] py-[3px] sm:py-[5px] border-2 border-blue-700 rounded-full">
          <div>
            <span className="font-medium">India</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ADDRESS;
