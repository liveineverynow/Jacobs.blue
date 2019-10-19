const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')

const app = express()

app.use(favicon(path.join(__dirname, 'public', 'assets', 'favicon.png')))

app.use(express.static('public'))

app.get('/:path', function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(8080)
