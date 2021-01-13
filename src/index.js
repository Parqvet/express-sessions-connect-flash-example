const express = require('express');
const path = require('path');

const app = express();

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes/index'));

// starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})