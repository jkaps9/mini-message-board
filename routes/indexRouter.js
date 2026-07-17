const { Router } = require("express");
const {
  getMessageByIndex,
  addNewMessage,
  getMessages,
} = require("../controllers/messageControllers");

const indexRouter = Router();

indexRouter.post("/new", (req, res) => addNewMessage);

indexRouter.get("/messages/:messageId", (req, res) => getMessageByIndex);

indexRouter.get("/", (req, res) => {
  getMessages().then((data) => res.render("index", { messages: data }));
});

module.exports = indexRouter;
