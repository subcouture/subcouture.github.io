var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const fs = require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');
var projectRouter = require('./routes/projects');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/blog', blogRouter);
app.use('/projects', projectRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

['index', 'blog/brook', 'projects/glinskis'].forEach( path => {

    app.render(path, {
        // optional metadata here
        }, (err, res) =>{
        if (err)
            console.log('Error rendering ' + path, err)
        else {
            fs.writeFile(__dirname + '/public/' + path + '.html', res, function(err, res) {
                if (err)
                    console.log('error saving html file', path, err)
            })
        }
    })

})

module.exports = app;
