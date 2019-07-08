const router = require('express').Router()
const { getSignup, postSignup, getLogin, postLogin, getProfile, logout } = require('../controllers/auth.controller')
const { catchErrors } = require('../middlewares/handlers')
const { isLoggedIn } = require('../middlewares/auth')

router.get('/', (req, res, next) => res.render('index'))

router.get('/signup', getSignup)
router.post('/signup', catchErrors(postSignup))

router.get('/login', getLogin)
router.post('/login', catchErrors(postLogin))

router.get('/profile', isLoggedIn, getProfile)

router.get('/logout', logout)

module.exports = router
