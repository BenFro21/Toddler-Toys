const express = require('express')
const router = express.Router()
const toyCtrl = require('../controllers/toyCtrl')



router.get('/', toyCtrl.showAll)
router.post('/', toyCtrl.create)
router.get('/:id', toyCtrl.getOne)
router.put('/:id', toyCtrl.update)
router.delete('/:id', toyCtrl.deleteIt)








module.exports = router