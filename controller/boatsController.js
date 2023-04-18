import { getDb } from "../util/db.js"
const COL = "boats"

export const getBoats = async (req, res) => {
	console.log(req.headers["authorization"])
	const db = await getDb()
	const docs = await db
		.collection(COL)
		.find({ user: req.headers["authorization"] })
		.toArray()
	console.log(docs)
	if (docs === null) res.end()
	else {
		res.json(docs)
	}
}

export const addBoat = async (req, res) => {
	console.log(req.body)
	const db = await getDb()
	const result = await db.collection(COL).insertOne(req.body)
	res.end()
}
