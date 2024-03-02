import React from "react";

import ADDRESS from "@/components/address";
import MAIN_TEXT from "@/components/mainText";
import SELF_INTRO from "@/components/shortIntro";
import ROTATE_IMAGE from "@/clientComponents/rotateOnScroll";
import EXPERTIES from "@/components/experties";
import ABOUTME from "@/components/aboutMe";
import PROJECTS from "@/clientComponents/projects";
import PROJECTS_MOBILE from "@/clientComponents/projectMobile";
import FEATURED_PROJECTS from "@/clientComponents/featuredProjects";

const HOME = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center text-center">
        <div className="w-full px-[20px]">
          <ADDRESS />
          <MAIN_TEXT />
          <SELF_INTRO />
          <ROTATE_IMAGE />
          <EXPERTIES />
          <ABOUTME />
          <FEATURED_PROJECTS/>
          <div className="hidden md:block">
            <PROJECTS />
          </div>
          <div className="block md:hidden">
            <PROJECTS_MOBILE />
          </div>
        </div>
      </div>
    </>
  );
};

export default HOME;
