const express = require("express");

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.send("Admin Page");
});

module.exports = adminRouter;
