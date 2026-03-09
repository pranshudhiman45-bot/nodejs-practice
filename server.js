const http = require('http')
const fs = require('fs')
const path = require('path')
let fileName
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    fileName = path.join(__dirname, 'src', 'pages', 'Home.html')
  } else if (req.url === '/about') {
    fileName = path.join(__dirname, 'src', 'pages', 'About.html')
  } else if (req.url === '/contact') {
    fileName = path.join(__dirname, 'src', 'pages', 'Contact.html')
  } else {
    res.end('Page not found')
    return
  }
  fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
      res.end('Error')
      return
    }
    res.end(data)
  })
})
const PORT = 3000
server.listen(PORT, () => {
  console.log(`Server is start at ${PORT} Port`)
})
