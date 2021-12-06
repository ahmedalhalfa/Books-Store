// Schema Vs DataBase?

const express = require("express");
// const noteRouter = require("./routers/noteRouter");
const storeRoute = require("./routers/storeRoute");
const cors = require("cors");

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("server started...");
});

// app.use("/api/v1/", noteRouter);
app.use("/api/v1/", storeRoute);

app.listen(8080, () => {
  console.log("server started...");
});
