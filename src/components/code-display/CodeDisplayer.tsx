import React from "react";
import Menu from "../Menu";
import Logs from "./Logs";
import Comments from "./Comments";

function CodeDisplayer({ data }) {
  return (
    <div className="border-2 border-solid dark:border-[#AE2F0F] rounded-xl p-[24px] w-[440px] max-w-[440px] ml-auto">
      <Menu
        displayData="javascript"
        dataArr={["javascript", "typescript"]}
      ></Menu>
      <Logs data={data}></Logs>
      <Comments></Comments>
    </div>
  );
}

export default CodeDisplayer;
