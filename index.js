const express  = require('express')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer')
const app = express()
require('dotenv').config()

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL_USERNAME,
        pass:process.env.EMAIL_PASSWORD ,
    }

})

let mailOptions = {
    from:'ajetunmobi.ayobami@lmu.edu.ng',
    to:'olaniyi.emmanuel@lmu.edu.ng',
    subject:'Testing and testing',
    html:'<h1>welcome Emmanuel <h1>'
}

transporter.sendMail(mailOptions,(error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})