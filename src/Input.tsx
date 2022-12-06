import React, { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ onChange, className, type, required }) => {
  return (
    <input
      type={type}
      required={required}
      className={
        "w-full h-full border-4 border-blue-500 focus:outline-none focus:border-red-500 px-2 " +
        className
      }
      onChange={onChange}
    />
  );
};

export default Input;
