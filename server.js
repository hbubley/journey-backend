const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();

connectDB();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json({ extended: false }));

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/entries", require("./routes/entries"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
