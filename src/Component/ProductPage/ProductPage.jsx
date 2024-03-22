import React, { useState } from "react";
import "./ProductPage.scss";
import ProductDataGrid from "./ProductDataGrid/ProductDataGrid";
import { GoCommentDiscussion } from "react-icons/go";
import { LuSettings } from "react-icons/lu";
import { PiCirclesFour } from "react-icons/pi";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsSortNumericDown } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import { TiDownload } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { AiOutlineDelete } from "react-icons/ai";
import { header, aboutProductData } from "./Database.js";

const ProductPage = () => {
  const [query, setQuery] = useState("");

  const filterData = aboutProductData.filter((name) =>
    name.brandName.toLowerCase().includes(query)
  );

  return (
    <>
      <div className="product-container">
        <div className="product__Navbar">
          <p>Products</p>
          <div>
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search for..."
                name="search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <FiSearch
                size={14}
                style={{ position: "absolute", top: "7px", left: "4px" }}
              />
            </div>

            <button>
              <GoCommentDiscussion size={12} />
            </button>
            <button>
              <LuSettings size={12} />
            </button>
          </div>
        </div>
        <div className="product-container__tools">
          <div className="left_tools">
            <button className="wt-btn">
              <PiCirclesFour size={15} />
              All brands
              <TiArrowSortedDown fill="#515256" />
            </button>
            <button className="wt-btn">
              Desk
              <TiArrowSortedDown fill="#515256" />
            </button>
            <button className="wt-btn">
              Tags
              <TiArrowSortedDown fill="#515256" />
            </button>
            <button className="bot-btn">
              <BsSortNumericDown />
              Sort
            </button>
            <button className="bot-btn">
              <BsSliders />
              Filter
            </button>
          </div>
          <div className="right_tools">
            <button className="wt-btn">
              <span>+</span>
              Meeting
            </button>
            <button className="wt-btn">
              <TiDownload />
              Import/Export
            </button>
          </div>
        </div>
        <>
          <div className="dataGrid-Container_header gridTbl">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 7px",
              }}
            >
              <div
                className="brand-header"
                style={{ display: "flex", gap: "11px" }}
              >
                <input type="checkbox" style={{ marginLeft: "1.2rem" }} />
                <p className="head-para" style={{}}>
                  Brand
                </p>
              </div>
              <p className="head-para">+</p>
            </div>
            {header.map((item) => {
              return (
                <div
                  key={item.id}
                  className="dv-brd"
                  style={{ padding: "10px 7px" }}
                >
                  <p className="head-para" style={{}}>
                    {item.heading}
                  </p>
                </div>
              );
            })}
          </div>
          {aboutProductData
            .filter((name) => name.brandName.toLowerCase().includes(query))
            .map((data) => {
              return <ProductDataGrid data={data} key={data.code} />;
            })}

          <div className="dataGrid-Container_footer gridTbl">
            <div className="dv-brd fle-end">
              <p>{filterData.length} count</p>
            </div>
            <div className="dv-brd fle-end">
              <p>+ Add Calculation</p>
            </div>
            <div className="dv-brd fle-end">
              <p>+ Add Calculation</p>
            </div>
            <div className="dv-brd fle-end">
              <p>+ Add Calculation</p>
            </div>
            <div className="dv-brd fle-end">
              <p>+ Add Calculation</p>
            </div>
            <div className="dv-brd"></div>
            <div className="dv-brd"></div>
          </div>
        </>
      </div>
      <div className="product-footer">
        <div className="product-footer_container">
          <button className="blk-btn">3</button>
          <p>selected</p>
          <button className="wt-btn">
            <HiOutlineArchiveBox />
            Archive
          </button>
          <button className="wt-btn" style={{ color: "#6E1615" }}>
            <AiOutlineDelete />
            Delete
          </button>
          <button className="wt-btn">
            More
            <TiArrowSortedDown fill="#515256" />
          </button>
          <button className="cross-btn">
            <RxCross1 />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
