const express = require ('express')
const mongoose = require ('mongoose')
const bodyParser = require ('body-parser')
const { config } =require ('dotenv')
config()
//siempre se dividiran en un monton de archivos... para complejisar en los archivos a la larga.

const bookRoutes = require('./routes/book.routes')//para libros.
//Express para los middlewares
const app = express();
app.use(bodyParser.json())//parseador de los bodys

//Acá conectaremos la base de datos.
mongoose.connect (process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection;

app.use('/books',bookRoutes) //si es books busca la ruta de books, si es / ruta va aconectar con otra cosa.

const port =process.env.PORT || 3000

app.listen(port,() => {
    console.log(`Servidor iniciado en el Puerto ${port}`)
})