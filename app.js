// app config
const express = require('express')
    app = express()
    dotenv = require('dotenv')
    cors = require('cors')
    ejs = require('ejs')
    session = require('express-session')
    expressLayout = require('express-ejs-layouts')
    bodyParser = require('body-parser')
    db = require('./db/db')

    // environment configs
    dotenv.config()

    // static files
    app.use(express.static('public'))

    // views
    app.use(expressLayout)
    app.set('view engine', 'ejs')

    // form encoding
    app.use(express.urlencoded({ extended: false }))
    app.use(bodyParser.json())

    // routes
    app.use('/', require('./routes/urls'))


    // http config
    server_port = process.env.server_port || 5000
    server = app.listen(server_port, () => {
        console.log(`http:${process.env.server_port}//www.dpw.onrender.com running...`)
    })