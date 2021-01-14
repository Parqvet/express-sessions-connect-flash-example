const express = require('express');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// con esto tenemos una sesion en el servidor, un espacio en memoria que se puede compartir entre multiples paginas
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: false
}))
// modulo de flash para poder compartir mensajes entre diferentes vistas
app.use(flash());

// global variable
// middleware para definir variables globales y poder mostrarlas en cualquier vista
app.use((req, res, next) => {
    // para pasar este dato a todas las vistas, en express existe una propiedad llamada app.locals.(algun nombre)
    // por ejemplo creamos la variable llamada message, el cual tiene el valor success
    // ahora esta variable message puede ser accedida desde cualquier vista
    app.locals.message = req.flash('success');
    // una vez que hemos guardado ese valor le decimos que continue con next
    next();
});

// routes
app.use(require('./routes/index'));

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})