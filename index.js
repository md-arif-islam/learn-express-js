const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Middleware
app.param("id", (req, res, next, id) => {
  const userDetails = {
    id: id,
    name: "Bangladesh",
  };
  req.userDetails = userDetails;
  next();
});

app.get("/users/:id", (req, res) => {
  console.log(req.userDetails);
  res.send("This is home page");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("This is home page with post request");
});

app.listen(port, () => {
  console.log("Listening on post 3000");
});
