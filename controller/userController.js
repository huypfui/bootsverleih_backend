import { getDb } from "../util/db.js"
const COL = "user"

export const register = async (req, res) => {
	const db = await getDb()
	if (await check(req.body.email)) {
		const respond = await db.collection(COL).insertOne(req.body)
		console.log(respond.insertedId)
		res.json({ _id: respond.insertedId.toString() })
	} else {
		res.status(401).end()
	}
}

export const login = async (req, res) => {
	const db = await getDb()
	const respond = await db.collection(COL).findOne({ email: req.body.email })
	console.log(respond)
	if (respond === null) res.status(401).end()
	else {
		res.json({ _id: respond._id.toString() })
	}
	console.log(respond)
}

const check = async (email) => {
	console.log(email)
	const db = await getDb()
	const result = await db.collection(COL).findOne({ email })
	console.log(result)
	if (result === null) return true
	return false
}
