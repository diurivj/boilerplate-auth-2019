const User = require('../models/User')
const passport = require('passport')

exports.getSignup = (req, res, next) => res.render('auth/signup')

exports.postSignup = async (req, res, next) => {
  // We can use the method "register" because of the plugin PLM,
  // the first parameter is the info of the user, the second parameter is the password for the user
  const user = await User.register({ ...req.body }, req.body.password)
  // Just for feedback
  console.log('The user registered:', user)
  res.redirect('/login')
}

exports.getLogin = (req, res, next) => res.render('auth/login')

exports.postLogin = passport.authenticate('local', {
  failureRedirect: '/login',
  successRedirect: '/profile'
})

exports.getProfile = (req, res, next) => res.render('auth/profile', { user: req.user })

exports.logout = (req, res, next) => {
  req.logOut()
  res.redirect('/login')
}
