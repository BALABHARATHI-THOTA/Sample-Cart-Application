const mongoose = require('mongoose')
const Schema = require('mongoose').Schema

const ProductsSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  description: String,
  categoryId: {type:Schema.Types.ObjectId, ref: 'Categories'},
  image_url: String,
  isactive: {
      type: Boolean,
      required: true,
      default: false
  }
})

module.exports = mongoose.model('Product', ProductsSchema)