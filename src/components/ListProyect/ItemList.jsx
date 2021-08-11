import React from "react";

import "./ListProyect.css";
export default function ListProyect({ links, name, img, type }) {
  return (
    <>
      <li className="card">
        <a
          className="card-image"
          href={links[0]}
          target="_blank"
          rel="noopener noreferrer"
          style={{
          backgroundImage: `url(${img})`,
          }}
          data-image-full={img}
        >
        </a>
        <a
          className="card-description"
          href={links[0]}
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>{name}</h2>
          <p>
            {type.map((item) => (
              <span key={item} >
                {item}{" "}
              </span>
            ))}
          </p>
        </a>
      </li>
    </>
  );
}
