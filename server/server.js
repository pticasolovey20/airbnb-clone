const express = require("express");

require("dotenv").config();
const app = express();

app.get("/test", (request, response) => {
	response.json("test not ok");
});

app.listen(4000, () => {
	console.log("Server listening on port 4000");
});
