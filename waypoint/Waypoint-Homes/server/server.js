require('dotenv').config()
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      session = require('express-session'),
      passport = require('passport'),
      Auth0Strategy = require('passport-auth0'),
      cors = require('cors'),
      nodemailer = require('nodemailer'),
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

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'waypointhomes2@gmail.com',
        pass: process.env.EMAIL_PASS
    }
});

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

app.post('/form/submit', (req, res)=>{
    let {first, last, phone, email, income, eviction, bankruptcy, credit, appointmentDate, appointmentTime, propertyAddress, code} = req.body
    req.app.get('db').create_appointment([propertyAddress, first, last, phone, email, income, eviction, bankruptcy, credit, appointmentDate, appointmentTime, code]).then(()=>{
        var mailOptions = {
            from: 'waypointhomes2@gmail.com',
            to: req.body.email,
            subject: 'Self-Showing',
            html: `<h1>Self-Showing Created!</h1>
                   <p>Well look at you ${req.body.first} ${req.body.last}, being all hight-tech and setting up a self showing.</p>
                   <p>You are good to go and visit ${req.body.propertyAddress} at ${req.body.appointmentTime} on ${req.body.appointmentDate}.</p>
                   <p>When you arrive ath the house, notice the keypad on the front door. Your keypad will have either a star symbol or checkmark symbol in the bottom left corner.Enter your code:${req.body.code} then press the satr or checkmark key. Open Sesame!</p>
                   <p>Check out the house. Chat in private with your family r roommates and not have to worry about offending anyone.</p>
                   <p>On the way out please turn off the lights and press the star key on the keypad to lock the door.</p>
                   <p>Remember your code is only good for 1 hour so if you want to add more time or go back to the home later, <a href='http://waypointhomes.surge.sh'>Schedule Another Appointment</a></p>
                   <p><a href="http://localhost:3535/delete/${req.body.code}">Or Cancel Your Appointment</a></p>
                   <br/>
                   <p>Thank you,</p>
                   <p>Waypoint Homes</p>
                   <br/>
                   <p>If you have any questions or concerns, please do not hesitate to contact us.</p>
                   <p>Copyright © 2017 Waypoint Homes, All rights reserved.</p>
                   `
        }
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log('email error')
            }
            else{
                console.log('email sent' + info.response);
            }
        });
        res.status(200).send('noice')
    })
})

app.get('/delete/:code', (req, res)=>{
    req.app.get('db').delete_request([req.params.code]).then(
        res.redirect('http://localhost:3000/#/deleted')
    )
})



const port=3535

app.listen(port, ()=>{
    console.log("Listening on port " + port)
})