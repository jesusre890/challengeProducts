require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { log } = require("console");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_DEPLOY } =
  process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos las funciones al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, "/models", file));
    modelDefiners.push(modelDefiner(sequelize)); // Invocamos el constructor del modelo con sequelize
  });

// Creamos un objeto para almacenar los modelos y sus asociaciones
const models = {};

// Injectamos la conexion (sequelize) a todos los modelos llamando a las funciones en el arreglo modelDefiners
modelDefiners.forEach((model) => {
  models[model.name] = model;
});

// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { Products } = models;

//* Relaciones************************************************

module.exports = {
  ...models,
  conn: sequelize,
};
