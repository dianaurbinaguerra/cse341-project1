const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require('./data/database')
const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use((req, res, next) => {
    // remove when move to prod
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin, x-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', require('./routes'));



mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    } else {``
        app.listen(port, () => {
            console.log("Connected to the database");
            console.log(`Running on port ${port}`);
        });
    }
})

