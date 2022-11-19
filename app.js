const path = require('path')
const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()
app.use(cors())

const port = process.env.PORT || 4000
// automatically pass incoming json to an object
app.use(express.json())

app.get('/', (req, res) => {
  const data = fs.readFileSync('./data/timeData.json')
  res.send({ data: JSON.parse(data) })
})
app.post('/', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Server is up on port ${port}.`)
})
