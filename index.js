const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/users/:id", (req, res) => {
  res.format({
    "text/plain": function () {
      res.send("hey");
    },

    "text/html": function () {
      res.send("<p>html</p>");
    },

    "application/json": function () {
      res.send({ message: "hey" });
    },

    default: function () {
      // log the request and respond with 406
      res.status(406).send("Not Acceptable");
    },
  });
});

app.listen(port, () => {
  console.log("Listening on post 3000");
});
