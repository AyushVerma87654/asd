import React, { FC } from "react";

type HeadingProps = { children: string; className?: string };

const Heading: FC<HeadingProps> = ({ children, className }) => {
  return (
    <div className={"text-center text-4xl font-bold h-10 w-full " + className}>
      {children}
    </div>
  );
};

export default Heading;
