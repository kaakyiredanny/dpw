const mysql = require('mysql')

    db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'kaakyiredanny',
        database: ''
    })
    db.connect(err => {
        if (err) throw err
        console.log(`http:${process.env.sever_port}//database connected...`)
    })

module.exports = db