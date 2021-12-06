const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  description: String,
  isactive: {
      type: Boolean,
      required: true,
      default: false
  }
})

module.exports = mongoose.model('Group', groupSchema)