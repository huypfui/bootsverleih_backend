import express from "express"
import cors from "cors"
import multer from "multer" // um Dateien upzuloaden
import "./util/config.js"

// import controller
import { getBoats, addBoat } from "./controller/boatsController.js"
import { getReservation, addReservation } from "./controller/reservationsController.js"
import { login, register } from "./controller/userController.js"

const app = express()
const PORT = process.env.PORT || 8888

app.use(
	cors({
		origin: "http://localhost:5173",
	})
)

app.use(express.json()) // befüllt den req.body wenn der content-type application/json ist
// const upload = multer({ dest: "./uploads" })
// app.use("/uploads", express.static("./uploads"))

// login & register
app.post("/api/register", register)
app.post("/api/login", login)

// boats
app.get("/api/boats", getBoats)
app.post("/api/boats", addBoat)

// reservations
app.get("/api/reservations", getReservation)
app.post("/api/reservations", addReservation)

app.listen(PORT, () => console.log("Ich lausche auf Port", PORT))
