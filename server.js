const express = require("express");
const mongodb = require("./db/connect");
const professionalRoutes = require("./routes/professionals");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use("/professional", professionalRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Database is listening and node running on port ${port}`);
    });
  }
});