const express = require("express");
const app = express();
const authorRouter = require("./routes/authorRouter");

const indexRouter = require("./routes/indexRouter");
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(assetsPath));

app.use("/authors", authorRouter);
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
