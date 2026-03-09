const Product = require("../Model/ProductModel")

exports.createProduct = async (req, res) => {
  const { title, image, price, description, category } = req.body

  const product = await Product.create({
    title,
    image,
    price,
    description,
    category
  })

  res.status(201).json({
    message: "Product Created Successfully",
    product
  })
}
exports.getAllProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}


exports.updateproduct=async(req,res)=>{
    const product=await  Product.findByIdAndUpdate(
        req.params.id,
        {name:req.body.name,price:req.body.price},
     

    )
    res.json(product)
}

exports.deleteproduct =async(req,res)=>{
    const product =await Product.findByIdAndDelete(
    req.params.id
    )
    res.json({
        message :"PRODUCT DELETE SUCESSFULLY...",
        product
    })
}

