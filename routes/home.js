const express = require('express')
const app = express()
const axios = require('axios')

const getData = async () => {
  const response = await axios.get('')
}

app.get('/', (req, res) => {
  res.send("Bienvenue sur l'API Externals")
})

app.get('/characters', async (req, res) => {
    
  const response = await axios.get('https://thronesapi.com/api/v2/Characters')
  console.log(response.data)

  res.json(response.data)
})

app.get('*', (req, res) => {
  res.send('All routes')
})

module.exports = app