const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { Sequelize }= require('sequelize');
const sequelize = require('./config/database');


const app = express();

app.use(express.json());//req.body usefull

app.use(cors());

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
const createUserRoute = require('./routes/createUserRoute');
app.use('/createuser', createUserRoute);




module.exports=app;