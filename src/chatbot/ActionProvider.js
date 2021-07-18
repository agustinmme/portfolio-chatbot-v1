class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
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
  handleContact = () => {
    const message = this.createChatBotMessage(
      "Te dejo mi correo y redes :📧 agustinmansilla240@gmail.com ",
      {
        widget: "redes",
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
      "🤖 Mis comandos por ahora son: hola,chau,gracias,como estas,menu,conctacto,cmd,cv,skills. Ejemplo: me pasas tu Cv?",
    );
    this.addMessageToState(message);
  };

  handleAbout = () => {
    const message = this.createChatBotMessage(
      "Hola,soy un programador en búsqueda de mi primer empleo en el área IT en el cual pueda aprender y desarrollarme como profesional mientras termino la carrera. Me considero una persona perseverante con gran capacidad de adaptación y aprendizaje, en constante búsqueda de nuevos conocimientos  y aprendizajes, con el objetivo de crecer como persona y como profesional. Disfruto de nuevos desafíos para probar mi capacidad constantemente, me gusta conocer gente nueva, tanto para trabajar en equipo como para compartir historias y experiencias."
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
