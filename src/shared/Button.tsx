import { div } from "framer-motion/client";
import React from "react";

interface Button {
  children: React.ReactNode;
  // bgColor?: string;
  onClick?: () => void;
  className?: string;
  size?: string;
  "aria-label"?: string;
  "aria-expanded"?: boolean;
}

const Button = ({
  onClick,
  children,
  className,
  "aria-label": ariaLabel,
  "aria-expanded": ariaExpanded,
}: Button) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      className={`flex justify-center items-center gap-1 ${className}  text-[10px]  py-1.5 px-3   `}
    >
      {children}
    </button>
  );
};

export default Button;
