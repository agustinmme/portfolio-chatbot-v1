import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    { text: "Acerca de MÍ", handler: props.actionProvider.handleAbout, id: 1 },
    { text: "Proyectos", handler: props.actionProvider.handleProyect, id: 2 },
    { text: "Conctacto", handler: props.actionProvider.handleContact, id: 4 },
    { text: "Redes", handler: props.actionProvider.handleRedes, id: 5 },
    { text: "Comandos", handler: props.actionProvider.handleCommand, id: 6 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
