const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config({ path: "config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("db conection successful");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App is runung on ${port} ...`);
});
