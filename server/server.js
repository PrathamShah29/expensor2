import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const PORT = 4000;
const app = express();

mongoose.set("strictQuery", false);

app.use(cors());

await mongoose
	.connect(
		`mongodb+srv://user:prathamcoder@mern-todo.ibolkdd.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(console.log(`Connected with mongoDB database`))
	.catch((err) => {
		console.log(err);
	});

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
