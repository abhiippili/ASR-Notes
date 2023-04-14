const express = require("express");
const cors = require("cors");
const AppError = require("./utils/appError");
const notesRouter = require("./routes/noteRoutes");
const usersRouter = require("./routes/userRoutes");

const globalErrorHandler = require("./controllers/errorController");

const app = new express();

//body parser
app.use(express.json());
//cors
app.use(cors());

//custom middlewares
app.use("/api/notes", notesRouter);
app.use("/api/users", usersRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find any resource ${req.url}`, 404));
});

//global error handler
app.use(globalErrorHandler);
module.exports = app;
