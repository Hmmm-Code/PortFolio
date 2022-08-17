const express = require("express");

const app = express();

app.get(".api/v1/user", (req, res) => {
  res.status(200);
});

const port = 8080;
app.listen(port, () => {
  console.log(`App is runung on ${port} ...`);
});
