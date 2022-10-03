import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import DynamicTable from "../../Common/DynamicTable";
import HeaderContent from "../../Common/HeaderContent";

const Country = () => {
  return (
    <>
      <HeaderContent
        title="Countries"
        icon={faCirclePlus}
        btnText="Add Country"
      />
      <DynamicTable />
    </>
  );
};

export default Country;
