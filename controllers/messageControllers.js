const db = require("../db");

async function getMessageByIndex(req, res) {
  const { messageId } = req.params;
  const message = await db.getMessageByIndex(Number(messageId));
  if (!message) {
    res.send("message not found");
  }

  res.render("messages/messageDetails", { message: message });
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
  return messages;
}

module.exports = { getMessageByIndex, addNewMessage, getMessages };
