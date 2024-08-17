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

        query =`INSERT INTO registered_students (clientname, clientmail, clientbirthdate, clientnumber, clientlocation, clientid, sponsorname, healthissue, transactionid) VALUES ('${clientname}','${clientmail}','${clientbirthdate}','${clientnumber}','${clientlocation}','${clientid}','${sponsorname}','${healthissue}', '')`

        db.query(query, (err, results) => {
            if(err) {
                throw err
            } else {
                transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'codekaakyiredanny@gmail.com',
                        pass: 'kkwx uewi vjai klgn'
                    }
                })

              
                mailoptions = {
                    from: 'codekaakyiredanny@gmail.com',
                    to: clientmail,
                    subject: 'COURSE REGISTRATION',
                    date: new Date().toUTCString(),
                    html: `
        <!DOCTYPE html>
        <html lang="en"> 
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>mail</title>
        </head>
        <body>
        <div class="container" style="background: linear-gradient( to bottom, lightblue, whitesmoke,rgb(255, 148, 205));">
            <div class="appreciation">
                <h3>Thank you for signing up with us</h3>
                <hr>

                <p>
                    We are highly appreciated for enrolling with  <strong>DPW (Danny's Programming Workshops)</strong> online sessions
                    . Our course offers a wide range of benefits and accessibilities that opens you up for the job market. Kindly feel free to learn with us, as suggested by the course ethics we recommend having a good laptop, a good internet connectivity for joinin classes at schedule moments as follows; <br>
                      <u>MEETING DAYS</u> <br>
                      <li>MONDAYS - FRIDAYS:  5:00pm - 8:00pm</li>  
                      <li>SATURDAYS: 7:00am - 12:00pm</li>  
                </p>
            </div> <br>

                    
        <div class="copyright">
            <strong>&COPY; 2024</strong> All Rights Reserved designed by Daniel Nimako CEO of (DPW)
            <div class="owner"></div>
        <h6>
            <i class="uil uil-phone"></i> +233 597639506 <br>
            <i class="uil uil-envelope"></i> codekaakyiredanny@gmail.com <br>
            <i class="uil uil-map-marker"></i> Effiduasi - Ashanti Region
        </h6>
        </div>

                <style>
                    .container{
                        background: linear-gradient( to bottom, lightblue, whitesmoke,rgb(255, 148, 205));
                        font-size: 16px;
                    }
                    .appreciation{
                        padding: 20px;
                    }
                    .appreciation :where(strong, li,em, h3){
                        color: rgb(247, 74, 166);
                        background: linear-gradient( to bottom, lightblue, whitesmoke,rgb(255, 148, 205));
                        padding: 15px;
                    }
                    .copyright{
                        padding: 15px;
                        margin-top: 2rem;
                        aspect-ratio: 16/9;
                        font-size: 0.9rem;
                    }
                        .copyright :where(h6){
                        margin-top: 2rem;
                        font-size: 0.9rem;
                    }    
                </style>
    </body>
    </html>
`
                                  
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
    
    


    router.post('/payment/id', (req, res) => {
        const { transactionid } = req.body
         query =`INSERT INTO registered_students (clientname, clientmail, clientbirthdate, clientnumber, clientlocation, clientid, sponsorname, healthissue, transactionid) VALUES ('','','','','','','','', '${transactionid}')`
        db.query(query, (err, results) => {
            if(err) throw err
            res.render('outline', {
                msg: 'Thank you for confirming your transaction id'
            })
        })
    })
    
    

module.exports = router      