const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(cookieParser());

app.set("view engine", "ejs");

app.get("/users/:id", (req, res) => {
  console.log(req.cookies);
  res.render("pages/users");
});

app.listen(port, () => {
  console.log("Listening on post 3000");
});
