const db = require("../db");

async function getMessageByIndex(req, res) {
  const { messageIndex } = req.params;
  const message = await db.getMessageByIndex(Number(messageIndex));

  if (!message) {
  }

  res.send(message);
}

async function addNewMessage(req, res) {
  const messageAuthor = req.body.author;
  const messageText = req.body.message;
  console.log(messageText);
  console.log(messageAuthor);
  db.addNewMessage(messageAuthor, messageText).then(() => res.redirect("/"));
}

async function getMessages() {
  const messages = await db.getMessages();
  console.log(messages);
  return messages;
}

module.exports = { getMessageByIndex, addNewMessage, getMessages };
