exports.checkLoggedUser = (req, res, next) => {
  req.user ? (req.app.locals.loggedUser = true) : (req.app.locals.loggedUser = false)
  next()
}

exports.isLoggedIn = (req, res, next) => (req.isAuthenticated() ? next() : res.redirect('/login'))
