require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
    //   passport = require('passport'),
    //   Auth0Strategy = require('passport-auth0'),
      cors = require('cors'),
    //   nodemailer = require('nodemailer'),
axios = require('axios') 
      
const app = express();
console.log(process.env.SECRET)
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(bodyParser.json()) 
app.use(cors())
app.use( express.static( `${__dirname}/../build` ) );
console.log(__dirname)


//database

// app.get('/api/allprops', (req,res) => {
    
// })



const port=3535

app.listen(port, ()=>{
    console.log("Listening on port " + port)
})