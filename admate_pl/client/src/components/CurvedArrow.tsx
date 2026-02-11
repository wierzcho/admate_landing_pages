import React from "react";

export const CurvedArrow = ({ size = 100, className = "" }: { size?: number, className?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M50 20 C 50 100, 150 100, 120 120 C 100 135, 80 110, 110 90 C 150 60, 180 150, 160 180"
        stroke="#2B2B2B"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M160 180 L 140 170 M160 180 L 175 165"
        stroke="#2B2B2B"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
