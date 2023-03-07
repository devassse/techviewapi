const express = require("express")
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

console.log('Warming up...');

app.listen("5000", () => {
    console.log("Techview Backend is Running");
})