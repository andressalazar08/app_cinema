const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();


const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

const router = express.Router();

router.get('/', (req,res)=>{
    res.json({
        message: 'API estructuras de datos - cinema'
    })
});

app.use('/', router);

app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
})
