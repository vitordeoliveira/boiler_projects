const express = require("express");
const routes = require("./server/routes");
const cors = require("cors");

// config
require("dotenv").config({ path: "./config/.env" });
require("./database/models");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routes);

app.listen(process.env.PORT, () => {
  console.log("Listen on port:" + process.env.PORT);
});
