import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import {Avatar} from '../components/Avatar/Avatar'
import ListProyect from '../components/ListProyect/ListProyect'
import Options from "../components/Options/Options";
import Redes from "../components/Redes/Redes"
const botName = "Agustin";
const config = {
  botName: botName,
  customComponents:{
    botAvatar: (props) => <Avatar {...props}/>
  },
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
      widgetName: "redes",
      widgetFunc: (props) => <Redes {...props} />,
    }
  ],
};

export default config;
