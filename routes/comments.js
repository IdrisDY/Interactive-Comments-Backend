const express = require('express')
const router = express.Router()

const {getAllComments,createReply} = require('../controllers/commentControllers')

router.get('/', getAllComments)
router.post('/:id', createReply)

module.exports = router 