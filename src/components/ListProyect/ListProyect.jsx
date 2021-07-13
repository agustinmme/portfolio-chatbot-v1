import React from "react";
import Item from "./ItemList"
import "./ListProyect.css";
import data from "./data.json";

export default function ListProyect() {
  return (
    <div className="card-container">
      {data.map((item) => (
       <a key={item.id} target="_blank" rel="noopener noreferrer"  href={item.url}> 
      <Item  className="item-list" name={item.name} text={item.text} img={item.image} type={item.type}/>
      </a>
      ))}
    </div>
  );
}
