// @ts-check
const router = require('express').Router()
const passport = require('passport');

let msgCtrl = require('./message.controller')



//secured routes
router.use(passport.authenticate('jwt', { session: false }))

router.post('/encrypt',
  msgCtrl.encryptMessage)

router.post('/decrypt',
  msgCtrl.decryptMessage)



module.exports = router