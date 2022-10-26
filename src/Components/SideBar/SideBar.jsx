import React from "react";
import {
  faLocation,
  faPerson,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import SideBarHeader from "./SideBarHeader";
import ItemMenu from "./ItemMenu";
import { useSelector } from "react-redux";
import ItemTree from "./ItemTree";

function SideBar() {
  const sidebarState = useSelector((state) => state.sidebar.show);

  const locationItems = [
    {
      id: 1,
      itemName: "Countries",
    },
    {
      id: 2,
      itemName: "Regions",
    },
    {
      id: 3,
      itemName: "Cities",
    },
  ];

  return (
    <aside
      className={`h-full overflow-y-auto bg-sky-900 text-white ease-in-out duration-300 ${
        sidebarState ? "translate-x-0 w-72" : "translate-x-[-100%] w-0"
      }`}
    >
      <SideBarHeader />
      <ul className="flex flex-col items-center justify-center">
        <ItemTree
          icon={faLocation}
          itemName="Location"
          childItems={locationItems}
        />
        <ItemMenu icon={faPerson} itemName="Personal Information" />
      </ul>
    </aside>
  );
}

export default SideBar;
