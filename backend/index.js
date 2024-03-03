const express = require("express");
const cors = require("cors");
const ConnectDb = require("./setup/dbConnection.js");
require("dotenv").config();

const port = process.env.PORT || 7000;
const app = express();

ConnectDb();
app.use(express.json()); // automatically convert to json in middleware so not need to do it later
app.use("/user", require("./routes/user.js"));
app.use(cors());

app.listen(port, () => console.log(`Server is running on port ${port}`));
