const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =  'mongodb+srv://samarakoonamila98:admin@cluster0.et63378.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToDatabase() {
  try {
    await client.connect();
  } finally {
    console.log("You successfully connected to MongoDB!");
  }
}

async function disconnectToDatabase() {
  try {
    await client.close();
  } finally {
    console.log("You successfully disconnected from MongoDB!");
  }
}

module.exports = { client, connectToDatabase, disconnectToDatabase };