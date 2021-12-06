const express = require('express')
const router = express.Router()
const Group = require('../models/group')
const Category = require('../models/categories')
const Products = require('../models/products')


// Fetches all active groups
router.get('/', async (req, res) => {
  try {
    const groups = await Group.find({ isactive: true })
    res.json(groups)
    .status(200)
  } catch (err) {
    console.log(err)
    res.send({ error: true, msg: err })
    .status(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const group = await Group.findById(req.params.id)
    res.json(group)
  } catch (err) {
    res.send('Error : ' + err)
  }
})

router.get('/:id/products', async (req, res) => {
  try {
    const groupId = req.params.id;
    const group = await Products.find()
    .populate({
      path: 'categoryId',
      select:
        'groupId name description',
    })
    const cateGrp = {}
    for(let g of group)
    {
    if(!cateGrp[g.categoryId._id])
      cateGrp[g.categoryId._id] = {
        name:g.categoryId.name,
        products:[]
      }
      cateGrp[g.categoryId._id].products.push({name:g.name,description:g.description})
    }


    res.json(cateGrp)
  } catch (err) {
    res.send('Error : ' + err)
  }
})

router.post('/', async (req, res) => {
  const new_group = new Group({
    name: req.headers.name,
    description: req.headers.description,
    isactive: req.headers.isactive
  })
  try {
    const create_group = await new_group.save()
    res.json(create_group)
  } catch (err) {
    res.send('Error :' + err)
  }
})

router.put('/:id', async (req, res) => {
  try {
    const group = await Group.findById(req.params.id)
    group.name = req.headers.name,
      group.description = req.headers.description,
      group.isactive = req.headers.isactive
    const update_group = await group.save()
    res.json(update_group)
  } catch (err) {
    res.send('Error :' + err)
  }
})

module.exports = router