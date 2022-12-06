import React, { FC } from "react";
import Button from "./Button";
import Heading from "./Heading";

type FirstPageProps = {};

const FirstPage: FC<FirstPageProps> = () => {
  return (
    <div className="bg-[url('/Images.jpg')] bg-cover h-screen bg-no-repeat text-white bg-center bg-red-500 flex flex-col items-center justify-center gap-12">
      <Heading>Trello</Heading>
      <div className="h-12 w-40">
        <Button className="text-black bg-white">Join Trello</Button>
      </div>
    </div>
  );
};

export default FirstPage;
