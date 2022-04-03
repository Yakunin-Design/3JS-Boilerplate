const express = require('express')
const path = require('path')

// Difine path for express config
const publicDir = path.join(__dirname, '../public')
const buildDir = path.join(__dirname, '../node_modules/three/build')
// const jsmDir = path.join(__dirname, '../node_modules/three/examples/jsm')

const app = express()
const port = process.env.PORT || 6969

app.use(express.static(publicDir))
app.use(express.static(buildDir))
// app.use(express.static(jsmDir))
app.use(express.json())

app.listen(port, () => { 
    console.log('server is up on port: ' + port + '\n\nVisit http://127.0.0.1:' + port)
})
