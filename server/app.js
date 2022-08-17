const fs = require("fs");
const express = require("express");
const app = express();
const user = JSON.parse(fs.readFileSync(`${__dirname}/../data/userData.json`));
exports.app;
app.get("/api/v1/user", (req, res) => {
  res.status(200).json({
    status: "sucess",
    data: {
      user,
    },
  });
});
