const express = require("express");
const app = express();
const newMessageRouter = require("./routes/newMessageRouter");

const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

// SETUP
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

// ROUTERS
app.use("/new", newMessageRouter);
app.use("/", indexRouter);

// ERROR HANDLING
app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).send(err.message);
});

// LISTEN
const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
