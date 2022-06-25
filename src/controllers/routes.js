const { Router } = require('express');
const { verifyToken } = require('../middlewares')
const controller = require('../controllers/entity.controller');
const router = Router();

router.post('/', verifyToken, controller.create)
router.put('/', verifyToken, controller.assign);



module.exports = router;