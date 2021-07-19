class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    if (
      !lowerCase.includes("skills") &&
      !lowerCase.includes("chau") &&
      !lowerCase.includes("gracias") &&
      !lowerCase.includes("como estas") &&
      !lowerCase.includes("cmd") &&
      !lowerCase.includes("cv") &&
      !lowerCase.includes("menu") &&
      !lowerCase.includes("contacto") &&
      !lowerCase.includes("hola")
    ) {
      return this.actionProvider.notFound();
    }
    if (lowerCase.includes("skills")) {
      this.actionProvider.handleSkills();
    }
    if (lowerCase.includes("hola")) {
     this.actionProvider.greetings();
    }
    if (lowerCase.includes("cv")) {
      this.actionProvider.handleCv();
    }
    if (lowerCase.includes("contacto")) {
      this.actionProvider.handleContact();
    }
    if (lowerCase.includes("gracias")) {
      this.actionProvider.ty();
    }
    if (lowerCase.includes("como estas")) {
      this.actionProvider.handleHow();
    }
    if (lowerCase.includes("menu")) {
       this.actionProvider.handleNav();
    }
    if (lowerCase.includes("cmd")) {
       this.actionProvider.handleCommand();
    }
    if (lowerCase.includes("chau")) {
       this.actionProvider.ungreet();
    }
  }
}

export default MessageParser;
