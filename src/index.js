const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

//settings
app.set('views', path.join(__dirname , 'views'))
app.set('view engine', 'ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    resave: false, //Evita que se vuelva a guardar
    secret: 'MysecretKey', //sirve para que cada sesion sea guardada de manera unica
    saveUninitialized: false
}));
app.use(flash());

//Global variable
app.use((req, res, next) => {
    app.locals.message = req.flash('success')
    next();
})

//routes
app.use(require('./routes/index'));

app.listen(3000);
console.log('server on port', 3000);