import React, { useState } from "react";
import "./Folder.scss";
import { folderItemData } from "./FolderItemsData";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

import { HiOutlineFolder } from "react-icons/hi";

const Folder = ({ item }) => {
  const [dropDownBtnOn, setDropDownBtnOn] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setDropDownBtnOn(!dropDownBtnOn);
    setIsActive(!isActive);
  };
  return (
    <div className="folder-container">
      {item.subFolder ? (
        <>
          <div
            className={`fld-container_head ${isActive ? "highlight-cont" : ""}`}
            onClick={handleOnClick}
            key={item.id}
          >
            <div>
              <HiOutlineFolder />
              <p>{item.title}</p>
            </div>

            {dropDownBtnOn ? (
              <TiArrowSortedUp fill="#515256" />
            ) : (
              <TiArrowSortedDown fill="#515256" />
            )}
          </div>

          {dropDownBtnOn ? (
            <div className="subFolder-container">
              {item.subFolder.map((data) => {
                return (
                  <div key={data.id}>
                    <p>{data.title}</p>
                  </div>
                );
              })}
              <div className="subFolder-addSub ds-flex">
                <button>+</button>
                <p style={{ paddingLeft: "0.3rem", color: "#515256" }}>
                  Add new sub
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      ) : (
        <div className="fld-container_head">
          <div className="ds-flex">
            <HiOutlineFolder />
            <p>{item.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Folder;
