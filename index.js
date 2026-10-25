const express = require("express")
const cors = require("cors")
const app = express()
const router = require("./routes/index.route.js")
const bodyParser = require('body-parser')
const { connectDB } = require("./lib/helpers/db.js")
require('dotenv').config()

const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

app.use(bodyParser.json())
app.use(cors({
  origin: "http://localhost:5173",
}))
app.use("/api", router)

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(5000, () => {
  console.log("app started")
  connectDB()
})