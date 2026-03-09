const express= require("express")

const router=express.Router();
const controller =require("../Controller/ProductController")

router.post("/create",controller.createProduct)
router.put("/update/:id",controller.updateproduct)
router.delete("/delete/:id",controller.deleteproduct)
router.get("/", controller.getAllProducts)


module.exports=router;