const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("This is home page");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("This is home page with post request");
});

app.listen(port, () => {
  console.log("Listening on post 3000");
});
