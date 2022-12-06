import React, { FC } from "react";

type DisplayBioProps = {
  url: string;
  name: string;
  description: string;
  index: number;
};

const DisplayBio: FC<DisplayBioProps> = ({ index, url, name, description }) => {
  let display = "flex-row";
  if (index % 2 === 0) {
    display = "flex-row-reverse";
  }
  return (
    <div>
      <div
        className={
          "flex justify-around items-center m-4 px-12 gap-10 " + display
        }
      >
        <div>
          <div className="w-80 h-80">
            <img src={url} className="w-full h-full" />
          </div>
          <h3 className="text-center">{name}</h3>
        </div>

        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBio;
