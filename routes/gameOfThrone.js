const express = require('express')
const app = express()
const axios = require('axios')

const getData = async () => {
  const response = await axios.get('')
}

app.get('/game-of-thrones/json', async (req, res) => {
  const response = await axios.get('../GOT.json')
  res.json(response.data)
})

app.get('/game-of-thrones/url', async (req, res) => {
      const response = await axios.get('https://thronesapi.com/api/v2/Characters')
  console.log(response.data)
  res.json(response.data)
})

app.get('/game-of-thrones/*', (req, res) => {
  res.send('All routes - error 404')
})

module.exports = app