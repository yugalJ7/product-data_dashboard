import React, { useState } from "react";
import "./ProductDataGrid.scss";
import { header, aboutProductData } from "../Database";

const ProductDataGrid = ({ query, data }) => {
  const [isHighlight, setIshighlight] = useState(false);

  return (
    <div className="product-DataGrid_Container">
      <div className="dataGrid-Container_content">
        <div
          key={data.code}
          className={`gridTbl ${isHighlight ? "highlght-row" : ""}`}
        >
          <div className="dv-brd">
            <div
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                paddingLeft: "1rem",
              }}
            >
              <input
                type="checkbox"
                name={data.brandName}
                id={data.code}
                onChange={() => setIshighlight(!isHighlight)}
              />
              <img
                src={data.brandIcon}
                alt={data.brandName}
                style={{
                  width: "1.6rem",
                  height: "1.6rem",
                  marginLeft: "5px",
                }}
              />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                {data.brandName}
              </p>
            </div>
          </div>
          <div className="dv-brd">
            <p
              style={{
                fontSize: "13px",
                fontWeight: "bolder",
                marginTop: "5px",
              }}
            >
              {data.description}
            </p>
          </div>
          <div className="dv-brd">
            <img
              src={data.member}
              alt={data.brandName}
              style={{ width: "auto", height: "1.6rem" }}
            />
          </div>
          <div className="dv-brd">
            {data.categories.map((res) => {
              return (
                <button
                  className="meeting-btn"
                  key={res.id}
                  style={{
                    marginRight: "5px",
                    backgroundColor: res.bgColor,
                    color: res.color,
                    border: `1px solid ${res.borderColor}`,
                    fontWeight: "bolder",
                  }}
                >
                  {res.type}
                </button>
              );
            })}
          </div>
          <div
            className="dv-brd tag-section"
            style={{
              display: "flex",
              alignItems: "center",
              overflowX: "scroll",
            }}
          >
            {data.tags.map((res) => {
              return (
                <button key={res.id} className="tags-btn">
                  {res.variety}
                </button>
              );
            })}
          </div>
          <div className="dv-brd">
            <button
              className="meeting-btn"
              style={{
                backgroundColor: data.bgColor,
                color: data.color,
                border: `1px solid ${data.borderColor}`,
              }}
            >
              {data.nextMeeting}
            </button>
          </div>
          <div className="dv-brd"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataGrid;
