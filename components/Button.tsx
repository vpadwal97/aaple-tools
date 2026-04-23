import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        cursor-pointer
        px-4 py-2
        rounded
        border
        border-gray-300
        dark:border-gray-700
        bg-gray-100
        dark:bg-gray-800
        text-gray-900
        dark:text-white
        hover:bg-gray-200
        dark:hover:bg-gray-700
        transition
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
