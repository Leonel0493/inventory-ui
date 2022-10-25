import React from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar/NavBar";
import Country from "./Locations/Country/Country";
import AddCountry from "./Locations/Country/AddCountry";

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
            <Country />
          </div>
        </div>
        <AddCountry />
      </div>
    </>
  );
};

export default App;
