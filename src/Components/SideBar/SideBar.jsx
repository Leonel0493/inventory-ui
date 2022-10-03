import React from "react";
import { faLocation, faPerson } from "@fortawesome/free-solid-svg-icons";
import SideBarHeader from "./SideBarHeader";
import ItemMenu from "./ItemMenu";
import { useSelector } from "react-redux";

function SideBar() {
  const sidebarState = useSelector((state) => state.sidebar.show);

  const showSidebar =
    "w-72 h-full overflow-y-auto bg-sky-900 text-white transition";
  const hideSidebar = "hidden transition";

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
      </ul>
    </aside>
  );
}

export default SideBar;
