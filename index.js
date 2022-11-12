const express = require('express');
const { json } = require("express");
const connect = require("./config/database");
const listroute = require("./router/doroutes");

connect()
const app = express();

app.use(json());
app.use("/List", listroute);

const PORT = process.env.port || 5000;
app.get("/", (req, res) => {
    res.send("To Do List");
});

app.listen(5000, () => console.log("Serving on Port", (PORT)));