const dotenv = require("dotenv");

const app = require("./app");

dotenv.config({ path: "../config.env" });

const port = 8080;
app.listen(port, () => {
  console.log(`App is runung on ${port} ...`);
});
