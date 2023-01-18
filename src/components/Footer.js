import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="flex justify-between bg-red-700 dark:bg-black  text-white h-[40px]  items-center px-2 fixed w-full bottom-0">
      <div>
        <span className="text-sm font-sans">Valorant API Dökümantasyonu</span>
      </div>
      <div className="flex gap-x-2 pr-4">
        <a href="#">
          <AiFillLinkedin size={22} />
        </a>
        <a href="#">
          <AiFillGithub size={22} />
        </a>
      </div>
    </div>
  );
}
