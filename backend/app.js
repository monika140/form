const express = require("express");
const bodyParse = require("body-parser");
const usersRoutes = require("./routes/userRoutes");
const mongodbConnection = require("./models/index");
const cors = require("cors");
const app = express();

app.use(bodyParse.json());
app.use(usersRoutes);
// Use CORS middleware
//app.use(cors());==> giving erorrs
app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    credentials: true, // Allow credentials (e.g., cookies)
  })
);
// server start
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
