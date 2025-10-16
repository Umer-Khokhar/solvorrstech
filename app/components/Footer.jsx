import React from "react";
import { Section } from "./";
import { socials } from "../constants";

const Footer = () => {
  return (
    <div className={`!px-0 !py-6 border-t border-n-1/10`}>
      <div className="container flex justify-between items-center max-sm:flex-col gap-10">
        <p>{new Date().getFullYear()}. All right reserved</p>
        <ul className="flex justify-center items-center gap-4">
          {socials.map((socialIcon) => (
              <a key={socialIcon.id} href={socialIcon.url} target="_blank">
            <li
              className="bg-n-7 p-3 transition-colors hover:bg-n-6 rounded-full cursor-pointer"
            >
                <img
                  src={socialIcon.iconUrl}
                  alt={socialIcon.title}
                  width={15}
                  height={15}
                />
            </li>
              </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
