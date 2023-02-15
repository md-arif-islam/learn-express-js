const express = require("express");
const adminRouter = require("./Router/adminRouter");
const publicRouter = require("./Router/publicRouter");
const app = express();
const port = 3000;

app.use("/", publicRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log("Listening on post 3000");
});
