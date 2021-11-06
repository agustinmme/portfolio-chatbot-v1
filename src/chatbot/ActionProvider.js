class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greetings = () => {
    const message = this.createChatBotMessage("¡Hola! Lindo día ¿no?");
    this.addMessageToState(message);
  };
  ungreet = () => {
    const message = this.createChatBotMessage("¡Chau! 👋  Me quedo acá para ayudarte cuando necesites ");
    this.addMessageToState(message);
  };
  ty = () => {
    const message = this.createChatBotMessage("¡De nada! Estoy para ayudarte 😃");
    this.addMessageToState(message);
  };
  notFound = () => {
    const message = this.createChatBotMessage(
      "Por el momento no cuento con esa información. Tal vez pueda ayudarte con algo más. "
    );
    this.addMessageToState(message);
  };

  handleProyect = () => {
    const message = this.createChatBotMessage(
      "Dale, te pasos mis proyecto y challenges 😆",
      {
        widget: "challenges",
      }
    );

    this.addMessageToState(message);
  };
  handleSkills = () => {
    const message = this.createChatBotMessage(
      "👨‍💻 Mis habilidades:",
      {
        widget: "habilidades",
      }
    );

    this.addMessageToState(message);
  };
  handleNav = () => {
    const message = this.createChatBotMessage(
      "🤖",
      {
        widget: "options",
      }
    );

    this.addMessageToState(message);
  };
  handleHow= () => {
    const message = this.createChatBotMessage(
      "¡Muy bien, gracias! 😊 Espero que vos también ¡Listo para ayudarte! ",
    );
    this.addMessageToState(message);
  };
  handleUpdate= () => {
    const message = this.createChatBotMessage(
      "🆙 Proximo update = emojis",
    );
    this.addMessageToState(message);
  };
  handleContact = () => {
    const message = this.createChatBotMessage(
      "Te dejo mi correo y redes :📧 agustinmansilla240@gmail.com ",
      {
        widget: "contacto",
      }
    );
    this.addMessageToState(message);
  };
  handleCv = () => {
    const message = this.createChatBotMessage(
      "Te dejo mi cv 📃",
      {
        widget: "cv",
      }
    );
    this.addMessageToState(message);
  };

  handleCommand = () => {
    const message = this.createChatBotMessage(
      "🤖 Mis comandos por ahora son: hola,chau,gracias,como estas,menu,contacto,cmd,cv,skills,update. Ejemplo: me pasas tu Cv?",
    );
    this.addMessageToState(message);
  };

  handleAbout = () => {
    const message = this.createChatBotMessage(
      "Soy una persona en búsqueda de mi primer empleo como programador, labor que me apasiona desde que tuve la oportunidad de aprender. Me considero una persona perseverante, con gran capacidad de adaptación y aprendizaje aunque un poco inquieto ya que constantemente me encuentro realizando nuevos proyectos que puedan servir a otras personas, tal como los que se presentan en este portfolio. Me gusta trabajar en equipo ya que encuentro en ellos una oportunidad de aprender y ampliar mis puntos de vista tomando las opiniones de otras personas para poder lograr el mejor trabajo en un proyecto."
    );
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };

}

export default ActionProvider;
