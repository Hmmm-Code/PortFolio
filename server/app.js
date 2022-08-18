// const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());
// const user = JSON.parse(fs.readFileSync(`${__dirname}/../data/userData.json`));
const userRouter = require("./routes/userRoute");

app.use("/api/v1/users", userRouter);

module.exports = app;
