import React from "react";
import "./Sidebar.scss";
import Folder from "./Folders/Folder";
import { folderItemData } from "./Folders/FolderItemsData";
import { LuPenTool } from "react-icons/lu";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { PiBracketsAngleBold } from "react-icons/pi";
import { ImCommand } from "react-icons/im";
import { HiOutlineUserAdd } from "react-icons/hi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
const Sidebar = () => {
  return (
    <>
      <div className="sidebar-content">
        <div className="content-header_company">
          <div className=" header-company_name ds-flex">
            <img
              src="/compy-logo.webp"
              alt="company-logo"
              style={{
                width: "2rem",
                height: "1.9rem",
                borderRadius: "5px",
              }}
            />
            <div>
              <p>INC</p>
              <p>InnovateHub</p>
            </div>
          </div>

          <img
            src="/profile-img.png"
            alt="profile-img"
            style={{ width: "1.6rem", height: "1.6rem" }}
          />
        </div>
        <div className="header-about_team">
          <div className=" about-team_single ds-flex">
            <div className="ds-flex">
              <LuPenTool size={15} />
              <p>Design Team</p>
            </div>
            <button className="ds-flex">
              <ImCommand size={10} />
              <p>+</p>
              <p>1</p>
            </button>
          </div>
          <div className=" about-team_single ds-flex">
            <div className="ds-flex">
              <HiOutlineSpeakerphone size={15} />
              <p>Marketing Team</p>
            </div>
            <button className="ds-flex">
              <ImCommand size={10} />
              <p>+</p>
              <p>2</p>
            </button>
          </div>
          <div className=" about-team_single ds-flex">
            <div className="ds-flex">
              <PiBracketsAngleBold size={15} />
              <p>Development Team</p>
            </div>
            <button className="ds-flex">
              <ImCommand size={10} />
              <p>+</p>
              <p>3</p>
            </button>
          </div>
        </div>
        <div className="header-create_team ds-flex">
          <button>+</button>
          <p>Create a team</p>
        </div>

        <div
          className="ds-flex"
          style={{
            marginTop: "0.7rem",
            marginBottom: "0.5rem",
            justifyContent: "space-between",
            fontSize: "11px",
            fontWeight: "bolder",
            color: "#515256",
            padding: "0px 0.8rem",
            alignItems: "center",
          }}
        >
          <p>FOLDERS</p>
          <button
            style={{
              border: "none",
              backgroundColor: "white",
              color: "#515256",
              fontSize: "1rem",
            }}
          >
            <IoAddSharp />
          </button>
        </div>
        {folderItemData.map((item) => {
          return <Folder item={item} />;
        })}
      </div>

      <div className="sidebar-footer ds-flex">
        <div className="footer-invite ds-flex">
          <HiOutlineUserAdd size={15} style={{ marginLeft: "8px" }} />
          <p>Invite teammates</p>
        </div>
        <div className="footer-help ds-flex">
          <div className="ds-flex">
            <IoIosHelpCircleOutline size={16} style={{ marginLeft: "6px" }} />
            <p>Help and first steps</p>
          </div>
          <button>0/6</button>
        </div>
        <div className="footer-trail ds-flex">
          <button className="bt-One">7</button>
          <p>days left on trail</p>
          <button className="bt-Two">Add biling</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
