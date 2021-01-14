const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.post('/register', (req, res) => {
    console.log(req.body);
    /* forma de escribirlo usando el modulo session */
    // para enviar un mensaje entre paginas, como por ejemplo una variable o req.body
    // req.session.my_variable = 'Hello World';
    // req.session.user_data = req.body;

    // usando el modulo flash
    // lo mismo que habiamos hecho antes, solo que ahora desde una funcion
    // req.flash('user', req.body);

    req.flash('success', 'Now you are registered');
    res.redirect('/profile');

    // res.redirect('/products');
});

router.get('/profile', (req, res) => {
    /* forma de escribirlo usando el modulo session */
    // para mostrar la variable de la sesion
    // const user = req.session.user_data;
    // una vez pasado el mensaje se elimina porque es temporal
    // delete req.session.user_data;
    // como está guardada en una variable se lo podemos pasar al render
    // de esta forma estamos enviado datos entre una vista a otra utilizando las sesiones

    // en una constante user guardamos lo que desde req.flash trae en su variable user
    // const user = req.flash('user');
    // como flash devuelve un arreglo le pasamos el indice cero
    // const message = req.flash('success')[0];
    // para luego mostrarlo en la vista
    // res.render('profile', {
    //     message
    // });

    res.render('profile');
});

router.get('/products', (req, res) => {
    res.render('products');
})

module.exports = router;