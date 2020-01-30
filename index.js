// Imports
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const fs = require('fs')

// Init app
const app = express()

// Set favicon
app.use(favicon(path.join(__dirname, 'public', 'assets', 'favicon.png')))

// Display static site
app.use(express.static('public'))

// Set page routes
app.get('/:path', function(req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

// Start Server
app.listen(8080)