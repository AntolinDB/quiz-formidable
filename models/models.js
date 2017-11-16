var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite:
var sequelize = new Sequelize(
    null, //DB_NAME,
    null, //USERNAME,  
    null, //PASSWORD,
    { dialect: "sqlite", 
      storage: "quiz.sqlite"
    }
);

//Importar la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz = Quiz; // exportar definición de tabla Quiz

// sequelize.sync() crea e inicializa la tabla de preguntas en DB
sequelize.sync().then(function () {
    // sucess(..) ejecuta el manejador una vez creada la tabla
    Quiz.count().then(function (count) {
        if (count === 0) {
            Quiz.create({
                pregunta: 'Capital de Italia',
                respuesta: 'Roma'
            })
            .then(function () {
                console.log('Base de datos inicializada');
            });
    }
    });
});
