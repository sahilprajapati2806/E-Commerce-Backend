
const express = require("express")

const router = express.Router();
const controller = require("../Controller/UserController")

router.post("/create",controller.createUser)
router.put("/update/:id",controller.updateuser)
router.delete("/delete/:id",controller.deleteUser)
router.get("/getall",controller.getalluser)
router.get("/getone/:id",controller.getone)
router.post("/login", controller.loginUser)

module.exports = router;