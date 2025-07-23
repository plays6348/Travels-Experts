import React from "react";

export default function Loader({ width, height, className }) {
  return (
    <div
      className="w-full flex justify-center items-center"
      style={{ height: `${height * 2}px` || "100px" }}>
      <svg
        style={{ width: width || "100px", height: height || "100px" }}
        className={`animate-spin text-blue-400 ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 4.75V6.25"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
        <path
          d="M17.1266 6.87347L16.0659 7.93413"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
        <path
          d="M19.25 12L17.75 12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
        <path
          d="M17.1266 17.1265L16.0659 16.0659"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
        <path
          d="M12 17.75V19.25"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
        <path
          d="M7.9342 16.0659L6.87354 17.1265"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
        <path
          d="M6.25 12L4.75 12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
        <path
          d="M7.9342 7.93413L6.87354 6.87347"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"></path>
      </svg>
    </div>
  );
}
