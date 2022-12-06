import React, { FC, useState } from "react";
import AlbumDisplay from "./AlbumDisplay";

type AllAlbumProps = {};

export type dataType = {
  url: string;
  title: string;
};

const AllAlbum: FC<AllAlbumProps> = () => {
  const [data, setData] = useState<dataType[]>([
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
    { url: "https://www.youtube.com/watch?v=EngW7tLk6R8", title: "latest" },
  ]);

  return (
    <div className="grid grid-cols-2 py-12">
      {data.map((item) => (
        <AlbumDisplay {...item} />
      ))}
    </div>
  );
};

export default AllAlbum;
