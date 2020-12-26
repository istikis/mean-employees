const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-employess', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(db => console.log('DB in Connected!'))
    .catch((err) => console.error(err));

/**
 * Ahora para usar esta conexión debemos requerirla desde el archivo principal, index.js
 */