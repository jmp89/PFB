"use strict"

import "dotenv/config.js"
import express from "express"

const app = express()

const {PORT} = process.env

app.get("/", (req, res) => {
    res.send("¡Primer endpoint del PFB!")
})


app.listen(PORT, ()=> console.log("Server running on http://localhost:" + PORT))