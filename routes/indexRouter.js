const { Router } = require("express");

const indexRouter = Router();

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

indexRouter.get("/", (req, res) =>
  res.render("index", { title: "Mini Messageboard", messages: messages }),
);

indexRouter.post("/new", (req, res) => {
  const messageAuthor = req.body.author;
  const messageText = req.body.message;
  messages.push({ text: messageText, user: messageAuthor, added: new Date() });
  res.redirect("/");
});

indexRouter.get("/messages/:messageId", (req, res) => {
  const { messageId } = req.params;
  res.render("messages/messageDetails", { message: messages[messageId] });
});

module.exports = indexRouter;
