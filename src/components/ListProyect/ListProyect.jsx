import React from "react";
import Item from "./ItemList"
import "./ListProyect.css";
import data from "./data.json";

export default function ListProyect() {
  return (
    <div className="container">
      {data.map((item) => (
      <Item  key={item.id} className="item-list"  links={item.url}  name={item.name} text={item.text} img={item.image} type={item.type}/>
      ))}
    </div>
  );
}
