const express = require("express");
const mongoose = require("mongoose");
const route = require("./routes/route");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://reesheeka:rishika123@cluster0.6sez6kq.mongodb.net/VRdatabase", mongoose.set('strictQuery', true))
    .then(() => console.log("MongoDB is connected"))
    .catch((error) => error.message)


app.use("/", route);


app.listen(3000, function () {
    console.log("Server running on port " + 3000)
})