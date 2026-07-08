const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require('./data/database')
const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
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

