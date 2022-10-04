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

  const childItems = [
    {
      id: 1,
      itemName: "Child 1",
    },
    {
      id: 2,
      itemName: "Child 2",
    },
    {
      id: 3,
      itemName: "Child 3",
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
        <ItemMenu icon={faLocation} itemName="Location" />
        <ItemMenu icon={faPerson} itemName="Personal Information" />
        <ItemTree
          icon={faCameraRetro}
          itemName="Images"
          childItems={childItems}
        />
        <ItemTree
          icon={faCameraRetro}
          itemName="Images"
          childItems={childItems}
        />
      </ul>
    </aside>
  );
}

export default SideBar;
