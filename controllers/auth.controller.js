const User = require('../models/User')
const passport = require('../config/passport')

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

exports.postLogin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    console.log('error  1', err)
    if (err) return next(err)
    if (!user) return res.render('auth/login', { ...req.body, err: 'Email o contrasena incorrecta' })
    req.logIn(user, err => {
      console.log('error 2', err)
      if (err) return res.render('auth/login', { ...req.body, err: 'Contrasena incorrecta' })
      console.log(req.user)
      req.app.locals.user = req.user
      return res.redirect('/profile')
    })
  })(req, res, next)
}

exports.getProfile = (req, res, next) => res.render('auth/profile')

exports.logout = (req, res, next) => {
  req.logOut()
  res.redirect('/login')
}
