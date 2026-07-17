const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) =>
  res.render("form", { title: "New Message" }),
);

newMessageRouter.get("/", (req, res) => res.send("All authors"));
newMessageRouter.get("/:authorId", getAuthorById);

module.exports = newMessageRouter;
