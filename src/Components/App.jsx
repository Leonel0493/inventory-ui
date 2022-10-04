import React from "react";
import SideBar from "./SideBar/SideBar";
import NavBar from "./NavBar/NavBar";
import Country from "./Locations/Country/Country";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-row">
      <SideBar />
      <div id="main" className="w-full h-full flex flex-col">
        <NavBar />
        <div
          id="content"
          className="w-full h-full flex flex-col overflow-y-auto bg-gray-100"
        >
          <Country />
          <div className="w-full mt-4 px-5 flex flex-col">
            <div className="w-full shadow-md bg-white border border-gray-300 rounded-lg">
              <div
                id="cardHeader"
                className="w-full py-2 px-4 flex flex-row justify-between items-center border-b border-gray-300"
              >
                <h1 className="text-xl">Add Country</h1>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="w-5 h-5 text-red-600"
                />
              </div>
              <div className="w-full py-2 px-4">
                <form action="">
                  <div className="w-full px-3 mb-3 flex flex-col">
                    <label htmlFor="" className="text-base mb-1">
                      Country
                    </label>
                    <input
                      type="text"
                      className="px-2 py-1 border rounded-md border-gray-200"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
