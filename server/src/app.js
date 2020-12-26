const express = require('express');
const morgan = require('morgan'); //"morgan" es un Middleware
const cors = require('cors');

const app = express();

// environment variables
app.set('port', process.env.PORT || 4000);

app.use(cors());

/**Escucha las peticiones que van llegando y mostrarlas por consola */
app.use(morgan('dev'));
app.use(express.json()); //para que mi app entienda objetos con el content type app/json
app.use(express.urlencoded({ extended: false })); // este para que enienda datos que vienen de un formulario html


app.use("/api/employees", require('./routes/employees.routes'));


module.exports = app;