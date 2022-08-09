const express = require('express')
const app = express()
const axios = require('axios')

const getData = async () => {
  const response = await axios.get('')
}

app.get('/', (req, res) => {
  res.send("Bienvenue sur l'API Externals")
})

app.get('*', (req, res) => {
  res.send('All routes - error 404')
})

module.exports = app