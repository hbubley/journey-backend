const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

connectDB();

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': "*",
    'methods': 'GET,PUT,POST,DELETE',
    'credentials': true,
    'preflightContinue': false
}));
app.use(express.json({ extended: false }));
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/entries", require("./routes/entries"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
