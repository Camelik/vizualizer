"use client";

import { SearchParams } from "@/types/searchparams";
import useDrawer from "./useDrawer";
import useRandomizer from "./useRandomizer";

function Drawer({ searchParams }: { searchParams: SearchParams }) {
  const { drawerRef, isDrawerOpen, onDrawerClick } = useDrawer();
  const { changeInputValue, inputValue, onRandomClick, queryString, sort } =
    useRandomizer(searchParams);

  let newSortValue = sort === "ASC" ? "DESC" : "ASC";

  let modifiedSortString = queryString.replace(
    `sort=${sort}`,
    `sort=${newSortValue}`
  );

  return (
    <div
      className="w-[350px] absolute bottom-[-75px] left-[30px] select-none"
      ref={drawerRef}
    >
      <div
        className="dark:bg-[#AE2F0F]/[.56] bg-[#F07151] w-[80px] h-[44px] flex justify-center items-center cursor-pointer text-white"
        onClick={onDrawerClick}
      >
        {isDrawerOpen ? "Close" : "Open"}
      </div>
      <div className="dark:bg-[#AE2F0F]/[.56] bg-[#F07151] h-[75px] text-left py-[13px] px-[20px] text-[14px] text-white">
        <div className="flex">
          <p className="cursor-pointer mb-[13px]" onClick={onRandomClick}>
            Random
          </p>
          <input
            className="bg-transparent appearance-none outline-none w-[45px] mb-[13px] pl-[15px]"
            min={1}
            width={30}
            value={inputValue}
            type="number"
            onChange={changeInputValue}
          />
        </div>
        <a href={`en?${modifiedSortString}`}>{sort}</a>
      </div>
    </div>
  );
}

export default Drawer;
