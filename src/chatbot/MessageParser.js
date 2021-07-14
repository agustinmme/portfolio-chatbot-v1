class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowercase = message.toLowerCase();
    const wordsKeys = ["hola", "chau", "gracias", "cmd", "menu", "conctacto","cv","skills"];
    const COMMANDS = {
      hola: this.actionProvider.greet,
      chau: this.actionProvider.ungreet,
      "como estas": this.actionProvider.handleHow,
      cmd: this.actionProvider.handleCommand,
      menu: this.actionProvider.handleNav,
      gracias: this.actionProvider.ty,
      conctacto: this.actionProvider.handleContact,
      cv: this.actionProvider.handleCv,
      skills: this.actionProvider.handleSkills,
    };

    !wordsKeys.includes(lowercase)
      ? this.actionProvider.notFound()
      : COMMANDS[lowercase]();

  }
}

export default MessageParser;
