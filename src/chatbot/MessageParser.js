class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCase = message.toLowerCase();

    if (
      !lowerCase.includes("hola") &&
      !lowerCase.includes("chau") &&
      !lowerCase.includes("gracias") &&
      !lowerCase.includes("como estas") &&
      !lowerCase.includes("cmd") &&
      !lowerCase.includes("cv") &&
      !lowerCase.includes("menu") &&
      !lowerCase.includes("contacto") &&
      !lowerCase.includes("skills")
    ) {
      return this.actionProvider.notFound();
    }
    if (lowerCase.includes("hola")) {
      return this.actionProvider.greet();
    }
    if (lowerCase.includes("skills")) {
      this.actionProvider.handleSkills();
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
      return this.actionProvider.handleNav();
    }
    if (lowerCase.includes("cmd")) {
      return this.actionProvider.handleCommand();
    }
    if (lowerCase.includes("chau")) {
      return this.actionProvider.ungreet();
    }
  }
}

export default MessageParser;
