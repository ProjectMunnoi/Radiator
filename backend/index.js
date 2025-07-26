import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT

// Check if the PORT environment variable is set
if(!port) {
    console.error("PORT environment variable is not set.");
    process.exit(1);
}

app.get("/", (req, res) => {
    res.send("Hello from the backend!");
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});