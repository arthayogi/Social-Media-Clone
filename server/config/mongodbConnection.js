const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGO_URI
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const DB = client.db("gc01-db")

module.exports = {
  client,
  DB
}