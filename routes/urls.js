const express = require('express')
const { default: nodemon } = require('nodemon')
    router = express.Router()
    db = require('../db/db')
    nodemailer = require('nodemailer')
    
        // homepage route 
    router.get('/', (req, res) => {
        res.render('home')
    })

    // signup route
    router.get('/signup', (req, res) => {
        res.render('signup')
    })

    // outline route
    router.get('/course/outline', (req, res) => {
        res.render('outline')
    })

    // aboutus route
    router.get('/aboutus', (req, res) => {
        res.render('aboutus')
    })
    
    // seminars route
    router.get('/seminars', (req, res) => {
        res.render('seminars')
    })
    
    // community route
    router.get('/community', (req, res) => {
        res.render('community')
    })



    // ==============================================================================================================
    // SIGNUP ROUTE
    router.post('/signup', (req,res) => {
    const { clientname, clientmail, clientbirthdate, clientnumber, clientlocation, clientid, sponsorname, healthissue } = req.body

        query =`INSERT INTO registered_students (clientname, clientmail, clientbirthdate, clientnumber, clientlocation, clientid, sponsorname, healthissue) VALUES ('${clientname}','${clientmail}','${clientbirthdate}','${clientnumber}','${clientlocation}','${clientid}','${sponsorname}','${healthissue}')`

        db.query(query, (err, results) => {
            if(err) {
                throw err
            } else {
                transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'codekaakyiredanny@gmail.com',
                        password: 'gozp otdw lmjo zawf'
                    }
                })

                html = `
        <!DOCTYPE html>
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>mail</title>
        </head>
        <body>
        <div class="container">
            <div class="appreciation">
                <h3>Thank you for signing up with us</h3>
                <hr>

                <p>
                    We are highly appreciated for enrolling with  <strong>DPW (Danny's Programming Workshops)</strong> online sessions
                    . Our course offers a wide range of benefits and accessibilities that opens you up for the job market. Kindly feel free to learn with us, as suggested by the course ethics we recommend having a good laptop, a good internet connectivity for joinin classes at schedule moments as follows;
                      <em><u>MEETING DAYS</u></em>
                      <li>DAYS - TIME</li>
                      <hr>
                      <li>MONDAYS - FRIDAYS:  5:00pm - 8:00pm</li>  
                      <li>SATURDAYS: 7:00am - 12:00pm</li>  
                </p>
            </div>
        </div>

                <style>
                    .container{
                        background: linear-gradient( to bottom, lightblue, whitesmoke,rgb(255, 148, 205));
                        font-size: 16px;
                    }
                    .appreciation{
                        padding: 20px;
                    }
                    .appreciation :is(strong, li,em, h3){
                        color: rgb(247, 74, 166);
                    }
                </style>
    </body>
    </html>
`
                mailoptions = {
                    from: 'kaakyiredanny@gmail.com',
                    to: 'codekaakyiredanny#gmail.com',
                    subject: 'COURSE REGISTRATION',
                    text: html
                }

                
                transporter.sendMail(mailoptions, (err, info) => {
                    if(err) {
                        throw err
                    } else {
                        console.log('info :' + info.response)
                        res.render('signup', {
                            msg: 'Thank you for signing up with us...'
                        })
                    }
                })


            }
        })

    
            
    })
    
    
    
    

module.exports = router      