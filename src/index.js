const express = require('express')
const { PORT, CLIENT_URL } = require('./constants')
const app = express()
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require('cors')

//import passport middleware
require('./middlewares/passport-middleware')

//Initialize Middlewares
app.use(express.json())
app.use(cookieParser())
app.use(passport.initialize())
// app.use(cors({ origin: CLIENT_URL, credentials: true }))
app.use(cors({ 
  origin: [CLIENT_URL, 'https://code-areana-frontend.vercel.app'], // Add your frontend Vercel URL here
  credentials: true 
}))
// import routes
const authRoutes = require('./routes/auth')

//initialize routes
app.use('/api',authRoutes)


// app start
// const appStart = () =>{
//   try{
//     app.listen(PORT, ()=>{
//       console.log(`This app is running at http://localhost:${PORT}`)
//     })
//   } catch (error){
//     console.log(`Error: ${error.message}`)
//   }
// }
// appStart()

  app.listen(PORT, () => {
    console.log(`This app is running at http://localhost:${PORT}`)
  })


// For Vercel
module.exports = app