import express from "express"
import router from "./routes/index.js";
import db from "../config/db.js";

//!--------------------Obtener ruta actual--------------------!\\
import { fileURLToPath } from 'url';
import path, { join, dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//!-----------------------------------------------------------!\\

const app = express(); //inicia el app
const port = process.env.PORT || 4000; // puerto

//!--------------------Saber conección db------------------!\\
db.authenticate()
    .then(() => console.log("base de datos conectada"))
    .catch(error => console.log(error))
//!--------------------------------------------------------!\\

//!----------------------Settings-------------------!\\
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//!-------------------------------------------------!\\

// Obtener el año actual
app.use((req, res, next) => {
    const year = new Date().getFullYear()
    res.locals.actualYear = year
    res.locals.nombreSitio = "Agencia de viajes"
    next()
})

// Agregar boyd parser para leer los datos del formularip
app.use(express.urlencoded({ extended: true }))

app.use(express.static(join(__dirname, "../public"))); //dar acceso ala carpeta public

//!----------------------Rutas---------------------!\\
app.use("/", router)
//!--------------------------------------------------!\\

app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port} `)
})