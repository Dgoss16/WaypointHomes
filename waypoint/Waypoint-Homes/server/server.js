require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
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

passport.use( new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
},


function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    console.log('initial looking for user')
    db.get_user([profile.identities[0].user_id]).then(user=>{
        if(user[0]){
          
            console.log("found user")
            done(null, user[0].id)
        }
        else{
            console.log("create user")
           
            db.create_user([profile.displayName, profile.emails[0].value, profile.picture, profile.identities[0].user_id ]).then(
               user=>{ done(null, user[0].id)
               }
            )
        }
    })
}))

passport.serializeUser(function(userID, done){
    done(null, userID)
})

passport.deserializeUser(function(userID, done){
    app.get('db').current_user([userID]).then(user=>{
        done(null, user[0])
    })
    
})

app.use(passport.initialize())
app.use(passport.session())

massive(process.env.CONNECTION_STRING).then(db=>{
    app.set('db', db)
}).catch(err=>{
    console.log(err)
})

app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: process.env.FAILURE_REDIRECT
}))
//database

// app.get('/api/allprops', (req,res) => {
    
// })



const port=3535

app.listen(port, ()=>{
    console.log("Listening on port " + port)
})