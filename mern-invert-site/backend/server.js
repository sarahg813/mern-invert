const express = require("express");
const cors = require("cors");
//mongoose will help connect to mongodb database
const mongoose = require("mongoose");

// this configures so we can have our environment variables in the dotenv file
require("dotenv").config();

// this creates express server
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
// this allows use to parse JSON
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .catch(error => console.log(error.stack));
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully.");
});

const studiosRouter = require("./routes/studios");

app.use("/studios", studiosRouter);

// this starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port} `);
});
