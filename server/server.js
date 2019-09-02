require('dotenv').config()
// const path = require('path');
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const ctrl = require('./controller')

const app = express()
app.use(express.json())


massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`Finale is has been completed ${SERVER_PORT} times!`))
  })