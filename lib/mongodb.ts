import {MongoClient, Db} from "mongodb"

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB

if(!uri){
    throw new Error("MONGODB_URI tidak ada di .env")
}

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
    var _mongoClient : MongoClient | undefined;
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClient = client;
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise!;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function getDb(): Promise<Db> {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName);
}