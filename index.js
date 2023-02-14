const express = require("express");
const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log(`${new Date()} - ${req.method} - ${req.ip}`);
  next();
};

app.use(logger);

app.get("/users/:id", (req, res) => {
  res.send("Users page");
});

app.listen(port, () => {
  console.log("Listening on post 3000");
});
