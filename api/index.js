const app = require('./app');
const dotenv = require('dotenv').config();
const { Sequelize }= require('sequelize');
const sequelize = require('./config/database');
require('./config/relations'); // Importar las relaciones


const PORT = process.env.PORT || 5000;



//Database authenticate
const authenticateAndSyncDatabase = async()=>{
    try{
        await sequelize.authenticate()
        console.log('Database connection established');

        //sync
        await sequelize.sync({ force: false })
        console.log('Database synced successfully');


    }catch(error){
        console.error('Failed to connect or sync database', error)
    }
}

 
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
    authenticateAndSyncDatabase();
})
