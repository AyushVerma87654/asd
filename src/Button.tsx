import React, { ButtonHTMLAttributes, FC } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ onClick, children, className, type }) => {
  return (
    <button
      className={"w-full h-full rounded-md font-bold " + className}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
