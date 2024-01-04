const express = require('express')

const router = express.Router()
const{createtask, gettask, getsingletask, updatetask, deltask} = require("../controllers/taskcontroller");


router.post("/",createtask);
router.get("/",gettask);
router.get("/:id",getsingletask);
router.patch("/:id",updatetask);
router.delete("/:id",deltask);

module.exports = router;