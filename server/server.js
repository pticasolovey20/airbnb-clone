const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("./models/User.js");

require("dotenv").config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = "fasefraw4r5r3wq45wdfgw34twdfg";

app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
	})
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (request, response) => {
	response.json("test not ok");
});

// register

app.post("/register", async (request, response) => {
	const { name, email, password } = request.body;

	try {
		const userDoc = await User.create({
			name,
			email,
			password: bcrypt.hashSync(password, bcryptSalt),
		});

		response.json(userDoc);
	} catch (error) {
		response.status(422).json(error);
	}
});

// login

app.post("/login", async (request, response) => {
	const { email, password } = request.body;
	const userDoc = await User.findOne({ email });
	if (userDoc) {
		const passOk = bcrypt.compareSync(password, userDoc.password);
		if (passOk) {
			jwt.sign({ email: userDoc.email, id: userDoc._id }, jwtSecret, {}, (error, token) => {
				if (error) throw error;
				response.cookie("token", token).json(userDoc);
			});
		} else {
			response.status(422).json("not ok");
		}
	} else {
		response.json("not found");
	}
});

// profile

app.get("/profile", (request, response) => {
	const { token } = request.cookies;
	if (token) {
		jwt.verify(token, jwtSecret, {}, async (error, userData) => {
			if (error) throw error;
			const { name, email, _id } = await User.findById(userData.id);
			response.json({ name, email, _id });
		});
	} else {
		response.json(null);
	}
});

app.listen(4000, () => {
	console.log("Server listening on port 4000");
});
