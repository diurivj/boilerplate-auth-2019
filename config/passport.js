const User = require('../models/User')
const passport = require('../config/passport')

// Create a local strategy with PLM
passport.use(User.createStrategy())
// Serialize user with PLM, because of PassportLocalMongoose we can "User.serializeUser()"
passport.serializeUser(User.serializeUser())
// Deserialize user with PLM, because of PassportLocalMongoose we can "User.deserializeUser()"
passport.deserializeUser(User.deserializeUser())

module.exports = passport
