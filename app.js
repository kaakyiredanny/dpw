// app config
const express = require('express')
const session = require('express-session')
    app = express()
    cors = require('cors')
    ejs = require('ejs')
    session = require('express-session')
    bodyParser = require('body-parser')
    db = require('./db/db')


    // static files
    app.use(express.static('public'))

    // views
    app.set('view engine', 'ejs')

    // form encoding
    app.use(express.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    app.use(session({
        secret: 'secretkey',
        resave: false,
        saveUninitialized: false,
        cookie: { 
            secure: false 
        }  // true for https only
    }))

    // routes
    app.use('/', require('./routes/urls'))


    // http config
    server_port = process.env.server_port || 5000
    server = app.listen(server_port, () => {
        console.log(`http:${process.env.server_port}//www.dpw.onrender.com running...`)
    })