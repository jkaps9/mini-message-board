const db = require("../db");

async function getMessageByIndex(req, res) {
  const { messageIndex } = req.params;
  const message = await db.getMessageByIndex(Number(messageIndex));

  if (!message) {
  }

  res.send(message);
}

function addNewMessage(req, res) {
  const messageAuthor = req.body.author;
  const messageText = req.body.message;
  db.addNewMessage(messageAuthor, messageText);
  res.redirect("/");
}

async function getMessages(req, res) {
  const messages = await db.getMessages();
  console.log(messages);
  res.send(messages);
}

module.exports = { getMessageByIndex };
