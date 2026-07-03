const { MongoClient } = require("mongodb");
require("dotenv").config();

let database;

async function initDb(callback) {
  const client = new MongoClient(process.env.MONGODB_URL);

  try {
    await client.connect();
    database = client.db("cse341");
    console.log("Database connected");

    callback();
  } catch (err) {
    console.log("DB connection error:", err);
    callback(err);
  }
}

function getDb() {
  return database;
}

module.exports = {
  initDb,
  getDb
};