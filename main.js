const express = require('express')
const app = express()
const port = 3000

app.get('/login', (req, res) => {
  res.send("Login")
})

app.get('/register', (req, res) => {
  res.send("Register")
})