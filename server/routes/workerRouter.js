const router = require('express').Router();
const worker = require('../controllers/worker');

router.post('/login', worker.checkPermission);
router.post('/setNewEmployed', worker.setNewEmployed);
router.post('/update/:id', worker.updateEmployed);
router.get('/getById/:id', worker.getEmployeById);
router.get('/getAll', worker.getAllEmployed);

module.exports = router;