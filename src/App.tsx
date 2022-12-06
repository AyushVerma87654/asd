import React from "react";
import AllAlbum from "./AllAlbum";
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
    </div>
  );
};

export default App;
