const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { Sequelize }= require('sequelize');
const sequelize = require('./config/database');
const { errorHandler } = require('./middlewares/errors');
const cookieParser = require('cookie-parser');


const app = express();

app.use(express.json());//req.body usefull
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());//lectura de cookies para obtener del navegador
console.log(process.env.FRONT);

// app.options('*', cors());

app.use(cors({
    origin: process.env.FRONT, // Sin la barra al final
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true // Si estás usando cookies o autenticación con sesión
  }));
// app.use(cors({
//     origin: 'http://localhost:5173'
//   }));
const router = express.Router();

router.get('/', (req,res)=>{
    res.json({
        message: 'API estructuras de datos - cinema'
    })
});

app.use('/', router);

//Ruta movies
const movieRoutes =  require('./routes/movieRoutes');
app.use('/peliculas', movieRoutes);


//Ruta user
const userRoute = require('./routes/userRoutes');
app.use('/user', userRoute);


//Admin route
const adminRoute = require('./routes/adminRoute');
app.use('/admin', adminRoute);

//Sala route
const salaRoute = require('./routes/salaRoute');
app.use('/detalles', salaRoute);

//Silla route
const sillaRoute = require('./routes/sillaRoute');
app.use('/actualiza', sillaRoute)

app.use(errorHandler);


module.exports=app;