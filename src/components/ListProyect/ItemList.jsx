import React from "react";

import "./ListProyect.css";
const colors = {
  Nodejs: "tag nodejs",
  Javascript: "tag  js",
  Java: "tag java",
  Android: "tag android",
  React: "tag  react",
  MySql: "tag mysql",
  bootstrap: "tag ",
  "Chakra-ui": "tag chakra",
};
export default function ListProyect({ links, name, img, type }) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <img src={img} alt="project" />
        </div>
        <div className="card-body">
          <h4>{name}</h4>
          <div className="tag-container-grid">
            {type.map((item) => (
              <span key={item} className={colors[item]}>
                {item}
              </span>
            ))}
          </div>
          <div className="button-container-grid">
            <a target="_blank" rel="noopener noreferrer"  href={links[0]} >DEPLOY</a>
          </div>
        </div>
      </div>
    </>
  );
}
