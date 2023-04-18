import { MongoClient } from "mongodb"

const URI = process.env.Mongo_URI
const DB = process.env.Mongo_DB

const client = new MongoClient(URI)
let db

export const getDb = async () => {
	if (db) return db
	else {
		await client.connect()
		db = client.db(DB)
		return db
	}
}

// This JavaScript code imports a module called "MongoClient" from the "mongodb" library. This library allows the code to connect to a MongoDB database.

// The code creates two constants called "URI" and "DB" which are used to store the URI of the MongoDB server and the name of the database to be used respectively. These values are obtained from environment variables.

// The code also creates a new instance of the MongoClient class with the URI as a parameter.

// Then, the code exports a function called "getDb" that returns a Promise. The purpose of this function is to connect to the MongoDB database and return the database object.

// If the "db" object has already been created, the function simply returns it. If not, it connects to the database using the MongoClient instance and sets the "db" variable to the resulting database object. Finally, it returns the "db" object.

// Overall, this code establishes a connection to a MongoDB database and provides a way to retrieve the database object for use in other parts of the code.
