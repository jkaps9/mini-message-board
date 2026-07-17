const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

async function getMessageByIndex(messageIndex) {
  return messages[messageIndex];
}

async function addNewMessage(messageAuthor, messageText) {
  console.log(messageText);
  messages.push({ text: messageText, user: messageAuthor, added: new Date() });
  return;
}

async function getMessages() {
  return [...messages];
}

module.exports = { getMessageByIndex, addNewMessage, getMessages };
