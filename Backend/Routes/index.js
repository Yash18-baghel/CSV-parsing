const router = require("express").Router();
const fileUpload = require("express-fileupload");
const {fileupload} = require('../controllers/fileupload')
const {addDetail} = require('../controllers/addDetail')

router.post('/file',fileupload)
router.post('/userDetail',addDetail)

module.exports = router;