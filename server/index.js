const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();

dotenv.config();
const app = express();
const PORT = 8000;

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
app.use(cookieParser());

app.listen(PORT, () => {
  console.log("server is running on port");
});
