import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import ListProyect from '../components/ListProyect/ListProyect'
import Options from "../components/Options/Options";
import Contacto from "../components/Contacto/Contacto"
import Skills from "../components/Skills/Skills"
import Cv from "../components/Cv/Cv"
const botName = "Agustin";
const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`¡Hola! ¡Soy ${botName}! Contame, ¿Que quieres saber de mi?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },  {
      widgetName: "challenges",
      widgetFunc: (props) => <ListProyect {...props} />,
    }, {
      widgetName: "contacto",
      widgetFunc: (props) => <Contacto {...props} />,
    }, {
      widgetName: "habilidades",
      widgetFunc: (props) => <Skills {...props} />,
    }, {
      widgetName: "cv",
      widgetFunc: (props) => <Cv {...props} />,
    }
  ],
};

export default config;
