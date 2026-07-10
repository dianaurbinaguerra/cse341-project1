const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'User API',
        description: 'API for managing users',
    },
    host: 'localhost:8080',
    schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//this will generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);