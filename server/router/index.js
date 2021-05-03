const express = require("express");



const addchild = require("./child/addchild");
const district = require("./district");
const state = require("./state");







const router = express.Router();

router.use("/addchild", addchild);
router.use("/district", district)
router.use("/state", state);

module.exports = router;
