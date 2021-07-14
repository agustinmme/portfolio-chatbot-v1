import React from "react";
import data from './data.json'
import "./Skills.css"

const colors = {
    Nodejs: " tag-skill-2 nodejs",
    Javascript: "tag-skill-1  js",
    Java: "tag-skill-2  java",
    Android: "tag-skill-1  android",
    React: "tag-skill-2  react",
    MySql: "tag-skill-2 mysql",
    "Chakra-ui": "tag-skill-1  chakra",
    "SqlServer": "tag-skill-1  cSharp",
    "Firebase": "tag-skill-1  firebase",
    "MVC": "tag-skill-2 cSharp",
    "Capas": "tag-skill-2 cSharp",
    "Git": "tag-skill-2  java",
    "C#": "tag-skill-2  cSharp",
    "XML": "tag-skill-2  android",
    "HTML": "tag-skill-2  java",
    "CSS": "tag-skill-2  mysql",
  };
export default function Skills() {
  return (
    <>
      <div className='container'>
                 {data.map((item) => (
                <span key={item} className={colors[item]}>
                  {item}
                </span>
              ))}
        </div>
    </>
  );
}
