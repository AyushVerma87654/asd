import React, { FC } from "react";
import Button from "./Button";
import Heading from "./Heading";

type LatestReleaseProps = {};

const LatestRelease: FC<LatestReleaseProps> = () => {
  return (
    <div className="px-12 bg-black text-white p-4 space-y-16 h-screen">
      <Heading className="mt-12">Latest Release</Heading>
      <div className="flex">
        <div className="flex flex-col items-center justify-center">
          <Heading className="text-red-500">Trello Freestyle</Heading>
          <div>Sep 13, 2022</div>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
            tempora, molestias esse voluptatum, cupiditate omnis veniam facere,
            soluta voluptate adipisci beatae. Perferendis cupiditate deleniti
            quia ex asperiores saepe quis autem.
          </p>
        </div>

        <div>
          <video width="1000" height="240" controls>
            <source
              src="https://www.youtube.com/watch?v=EngW7tLk6R8"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="w-64 h-12 mx-auto mt-12">
        <Button className="bg-white text-black">STREAM / DOWNLOAD</Button>
      </div>
    </div>
  );
};

export default LatestRelease;
