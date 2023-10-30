var express = require("express");
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/login',studentController.student_login_get);
router.post('/login',studentController.student_login_post);
//exporting a module to be used in other parts of your application.
module.exports = router;