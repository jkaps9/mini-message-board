const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Home Page"));
indexRouter.get("/About", (req, res) => res.send("About Page"));
indexRouter.get("/Contact", (req, res) => res.send("Contact Page"));

module.exports = indexRouter;
