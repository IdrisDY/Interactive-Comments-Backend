const express = require('express')
const router = express.Router()

const {getAllComments,deleteReply,updateReply,createReply} = require('../controllers/commentControllers')

router.get('/', getAllComments)
router.post('/', createReply)
router.patch('/:id', updateReply)
router.delete('/:id', deleteReply)

module.exports = router 