const { Router } = require("express");
const {
  getMessageByIndex,
  addNewMessage,
  getMessages,
} = require("../controllers/messageControllers");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.render("index", getMessages));

indexRouter.post("/new", (req, res) => addNewMessage);

indexRouter.get("/messages/:messageId", (req, res) => {
  const { messageId } = req.params;
  res.render("messages/messageDetails", getMessageByIndex);
});

module.exports = indexRouter;
