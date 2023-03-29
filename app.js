//hello world
var fs = require("fs");
var http = require("http");
var https = require("https");

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moleculeRouter = require('./routes/molecules');
var catalogRouter = require('./routes/catalog');
var itemRouter = require('./routes/item');
var scenesRouter = require('./routes/scenes');
var moleculeViewer = require('./routes/moleculeViewer');
var sceneViewer = require('./routes/sceneViewer');
var addMolecule = require('./routes/addMolecule');
var addScene = require('./routes/addScene');
var loginRouter = require('./routes/login');
var sessionRouter = require('./routes/session');
var logoutRouter = require('./routes/logout');

var app = express();

http.createServer(app).listen(8000);
https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(4000, () => {
    console.log("server is running at port 4000");
  });

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("iauuhdfsoivfdsoviufh"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/molecules', moleculeRouter);
app.use('/catalog', catalogRouter);
app.use('/item', itemRouter);
app.use('/scenes', scenesRouter);
app.use('/moleculeviewer', moleculeViewer);
app.use('/sceneviewer', sceneViewer);

app.use('/addMolecule', addMolecule);
app.use('/addScene', addScene);
app.use('/login', loginRouter);
app.use('/session', sessionRouter);
app.use('/logout', logoutRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", { title: "MoleculAR - Error" });
});

module.exports = app;
