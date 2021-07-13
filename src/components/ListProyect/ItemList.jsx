import React from "react";

import "./ListProyect.css";

export default function ListProyect({ text, name, img, type }) {
  const colors = {
    Nodejs: "card-tag tag-normal nodejs",
    Javascript: "card-tag tag-normal  js",
    Java: "card-tag tag-normal  java",
    Android: "card-tag tag-normal  android",
    React: "card-tag tag-normal  react",
    MySql: "card-tag tag-normal  mysql",
    "Chakra-ui": "card-tag tag-normal  chakra",
  };
  return (
    <>
      <div className="property-card">
        <span>
          <div
            style={{
              backgroundImage: `url(${img})`,
              height: "16em",
              width: "14em",
              padding: "1em 2em",
              position: "Absolute",
              top: "0px",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="property-image-title"></div>
          </div>
        </span>
        <div className="property-description">
          <h5> {name} </h5>
          <div className="card-info">
            <div className="card-about">
              {type.map((item) => (
                <span key={item} className={colors[item]}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
