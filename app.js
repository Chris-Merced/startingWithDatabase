require("dotenv").config();
console.log(process.env.CONNECTION_KEY);

const express = require("express");
const app = express();
const db = require("./db/queries");
const indexRouter = require("./routers/indexRouter");
const newRouter = require("./routers/newRouter");
const deleteRouter = require("./routers/deleteRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

app.use("/new", newRouter);

app.use("/delete", deleteRouter);

app.post("/new", (req, res) => {
  console.log("Work in progress");
  return;
});

const PORT = 3000;
app.listen(PORT);
