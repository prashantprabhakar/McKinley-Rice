const express = require('express')
const router = express.Router()
const auth = require('./auth')
const message = require('./messages')

router.use('/auth', auth)
router.use('/message', message)


module.exports = router 
