const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/DBContext");
const initRoutes = require("./routes/index");

dotenv.config();
const app = express();
const PORT = 8000;

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));
app.use(cookieParser());

connectDB();
initRoutes(app);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
