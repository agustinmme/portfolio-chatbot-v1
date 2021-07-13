class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    const wordsKeys = ["hola", "chau", "gracias", "comandos", "menu", "redes"];
    const COMMANDS = {
      hola: this.actionProvider.greet,
      chau: this.actionProvider.ungreet,
      "como estas": this.actionProvider.handleHow,
      comandos: this.actionProvider.handleCommand,
      menu: this.actionProvider.handleNav,
      gracias: this.actionProvider.ty,
      redes: this.actionProvider.handleRedes,
    };

    !wordsKeys.includes(lowercase)
      ? this.actionProvider.notFound()
      : COMMANDS[lowercase]();

  }
}

export default MessageParser;
