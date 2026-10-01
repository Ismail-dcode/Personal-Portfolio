import React from 'react';

const Logo = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Outer ring */}
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="6"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1"
      />
      {/* Inner accent dot */}
      <circle cx="32" cy="8" r="2" fill="currentColor" fillOpacity="0.4" />
      {/* Monogram IS */}
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="'Instrument Serif', serif"
        fontStyle="italic"
        fontSize="18"
        fontWeight="600"
        fill="currentColor"
        letterSpacing="-0.5"
      >
        IS
      </text>
      {/* Underline accent */}
      <line
        x1="12"
        y1="31"
        x2="28"
        y2="31"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
