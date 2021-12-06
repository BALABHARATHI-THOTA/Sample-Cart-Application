const mongoose = require('mongoose')
const Schema =  require('mongoose').Schema;
const CategoriesSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  groupId: {type:Schema.Types.ObjectId, ref: 'Group'},
  description: String,
  isactive: {
      type: Boolean,
      required: true,
      default: false
  }
})

module.exports = mongoose.model('Categories', CategoriesSchema)