const express = require('express')
const router = express.Router()
const Product = require('../models/products')


// Fetches all active Products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({ isactive: true })
    res.json(products)
    .status(200)
  } catch (err) {
    console.log(err)
    res.send({ error: true, msg: err })
    .status(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.json(product)
  } catch (err) {
    res.send('Error : ' + err)
  }
})

router.post('/', async (req, res) => {
  const new_product = new Product({
    name: req.headers.name,
    description: req.headers.description,
    isactive: req.headers.isactive
  })
  try {
    const create_product = await new_product.save()
    res.json(create_product)
  } catch (err) {
    res.send('Error :' + err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    product.name = req.headers.name,
    product.description = req.headers.description,
    product.isactive = req.headers.isactive
    const update_product = await product.save()
    res.json(update_product)
  } catch (err) {
    res.send('Error :' + err)
  }
})

router.delete('/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id)
      const delete_product = await product.delete()
      res.json({msg: "Product deleted"}).status(200)
    } catch (err) {
      res.send('Error :' + err)
    }
  })

module.exports = router