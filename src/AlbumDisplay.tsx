import React, { FC } from "react";
import { dataType } from "./AllAlbum";

type AlbumDisplayProps = {};

const AlbumDisplay: FC<dataType> = ({ url, title }) => {
  return (
    <div className="py-5 px-20">
      <video width="600" height="240" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="py-2 text-center">{title}</div>
    </div>
  );
};

export default AlbumDisplay;
