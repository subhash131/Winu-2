import React from "react";

const XionLogo = ({
  className,
  fill = "white",
}: {
  className?: string;
  fill?: string;
}) => {
  return (
    <svg viewBox="0 0 25 72" className={className}>
      <path
        d="M7.42 39.1c-3.83-4.47-5.46-8.45-5.46-12.39 0-2.33.25-3.79.57-5.13C.65 25.56.01 28.53.01 31.34c0 14.85 13.62 16.77 13.62 27.28 0 2.54-1.35 5.99-5.89 12.45 13.7-18.28 17.18-24.86 17.18-29.42 0-12.77-13.56-14.91-13.56-29.27 0-3.28 1.88-7.22 5.38-12.37 0 0-3.33 4.69-5.13 7.19-6.41 8.92-8.89 20.5-4.18 31.91l-.01-.01Z"
        fill={fill}
      ></path>
    </svg>
  );
};

export default XionLogo;