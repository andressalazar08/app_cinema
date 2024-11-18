const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//Metadata infor
const options ={
    definition:{
        openapi: '3.0.0',
        info:{
            title: 'API - UDEA CINEMA APP',
            version: '1.0.0',
            description: 'API for the cinema app udea'
        },
    },
    apis: ['./api/routes/*.js', './api/models/*.js']
}

//Docs en JSON

const swaggerSpec = swaggerJSDoc(options);

//setup 
const swaggerDocs =(app,port)=>{
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log(`Version 1 docs are availabele at http://localhost:${port}/api-docs`);
    
}

module.exports = { swaggerDocs };