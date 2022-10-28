import React from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar/NavBar";
import Country from "./Locations/Country/Country";
import AddCountry from "./Locations/Country/AddCountry";
import { Route, Routes } from "react-router-dom";
import Regions from "./Locations/Regions/Regions";
import AddRegion from "./Locations/Regions/AddRegion";

const App = () => {
  return (
    <>
      <div className="w-screen h-screen flex flex-row">
        <SideBar />
        <div id="main" className="w-full h-full flex flex-col">
          <NavBar />
          <div
            id="content"
            className="w-full h-full flex flex-col overflow-y-auto bg-gray-100"
          >
            <Routes>
              <Route path="locations/countries" element={<Country />} />
              <Route path="locations/regions" element={<Regions />} />
            </Routes>
          </div>
        </div>
        <AddCountry />
        <AddRegion />
      </div>
    </>
  );
};

export default App;
