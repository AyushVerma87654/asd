import React, { FC, useState } from "react";
import DisplayBio from "./DisplayBio";
import Heading from "./Heading";

type BioPageProps = {};

type stateType = {
  url: string;
  name: string;
  description: string;
}[];

const BioPage: FC<BioPageProps> = () => {
  const des =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga?";
  const dummy = [
    {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      name: "Raja",
      description: des,
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      name: "Raja",
      description: des,
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      name: "Raja",
      description: des,
    },
    {
      url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      name: "Raja",
      description: des,
    },
  ];
  const [data, setData] = useState<stateType>(dummy);
  return (
    <div>
      <Heading>Bio Page</Heading>
      {data.map((item, index) => (
        <DisplayBio {...item} index={index} />
      ))}
    </div>
  );
};

export default BioPage;
