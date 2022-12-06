import React from "react";
import AllAlbum from "./AllAlbum";
import BioPage from "./BioPage";
import FirstPage from "./FirstPage";
import LatestRelease from "./LatestRelease";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <FirstPage />
      <LatestRelease />
      <AllAlbum />
      <BioPage />
    </div>
  );
};

export default App;
