class Message {
  constructor(user, text) {
    this.user = user;
    this.text = text;
    this.time = new Date();
  }
}

module.exports = Message;
