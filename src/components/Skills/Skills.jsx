import React from "react";
import data from './data.json'
import "./Skills.css"

const SVG = {
    Nodejs: "./images/nodejs.svg",
    Javascript: "./images/js.svg",
    Java: "./images/java.svg",
    Android: "./images/firebase.svg",
    React: "./images/react.svg",
    MySql: "./images/mysql.svg",
    "Chakra-ui": "./images/chakra.svg",
    "SqlServer": "./images/sqlserver.svg",
    "Firebase": "./images/firebase.svg",
    "Git": "./images/git.svg",
    "C#": "./images/csharp.svg",
    "HTML": "./images/html.svg",
    "CSS": "./images/css.svg",
    "npm": "./images/npm.svg",
    "Bootstrap":"./images/boostrap.svg",
    "Postgresql":"./images/Postgresql_elephant.svg",
    "Spring":"./images/Spring.svg",
  };
export default function Skills() {
  return (
    <>
      <div className='social-links'>
                 {data.map((item) => (
                      <span key={item} className="flex-center">
                      <span  className="social-btn flex-center">
                      <img src={SVG[item]}  alt='logo,skills'/>
                        <span>{item}</span>
                      </span>
                    </span>
              ))}
        </div>
    </>
  );
}
