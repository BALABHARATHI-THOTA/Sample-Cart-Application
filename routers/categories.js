const mongoose = require('mongoose')

const CategoriesSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  groupId: Schema.Types.ObjectId,
  description: String,
  isactive: {
      type: Boolean,
      required: true,
      default: false
  }
})

module.exports = mongoose.model('Categories', CategoriesSchema)