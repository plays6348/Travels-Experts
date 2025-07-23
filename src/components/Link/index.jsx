import React from "react";

const CustomLink = ({ link, child }) => {
  return (
    <span className={`inline-block relative group text-primary`}>
      <a
        href={link}
        className="transition-all mx-[4px] duration-300 group-hover:underlin">
        {" "}{child} {" "}
      </a>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary transform origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"></div>
    </span>
  );
};

export default CustomLink;
