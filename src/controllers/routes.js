const { Router } = require('express');
const { verifyToken } = require('../middlewares')
const controller = require('../controllers/entity.controller');
const router = Router();

router.get('/', verifyToken, controller.getAppointments.bind(controller));
router.get('/:userId', verifyToken, controller.getByUserId.bind(controller));
router.post('/', verifyToken, controller.create.bind(controller));
router.put('/', verifyToken, controller.assign.bind(controller));

module.exports = router;