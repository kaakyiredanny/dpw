const mysql = require('mysql')

    db = mysql.createConnection({
        host: 'bxzbirx9bm5taofehmmg-mysql.services.clever-cloud.com',
        user: 'ue19lhkmruzunaqh',
        password: 'WLahzkJAMwm25shWdDg3',
        port: 3306,
        database: 'bxzbirx9bm5taofehmmg'
    })

    db.connect(err => {
        if (err) throw err
        console.log(`http:${process.env.sever_port}//database connected...`)
    })

module.exports = db