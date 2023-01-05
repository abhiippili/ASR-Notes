const express = require("express");
const cors = require("cors");

const notesRouter = require("./routes/noteRoutes");
const usersRouter = require("./routes/userRoutes");

const app = new express();

//body parser
app.use(express.json());
//cors
app.use(cors());

//custom middlewares
app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);

module.exports = app;
