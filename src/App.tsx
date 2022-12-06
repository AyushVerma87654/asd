import React from "react";
import { Route, Routes } from "react-router-dom";
import AllAlbum from "./AllAlbum";
import BioPage from "./BioPage";
import FirstPage from "./FirstPage";
import LatestRelease from "./LatestRelease";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <div>
              <NavBar />
              <FirstPage />
              <LatestRelease />
            </div>
          }
        />
        <Route path="/allalbum" element={<AllAlbum />} />
        <Route path="/biopage" element={<BioPage />} />
      </Routes>
    </div>
  );
};

export default App;
