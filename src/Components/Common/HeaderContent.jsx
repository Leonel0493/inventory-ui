import React from "react";

import SuccessBtn from "./SuccessBtn";

const HeaderContent = ({ title, icon, btnText }) => {
  return (
    <div className="w-full py-3 px-5 mb-4 flex flex-row justify-between">
      <p className="text-2xl">{title}</p>
      <SuccessBtn icon={icon} btnText={btnText} />
    </div>
  );
};

export default HeaderContent;
