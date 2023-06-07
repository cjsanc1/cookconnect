const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
    required: true,
  },
  instructions: {
    type: [String],
    required: true,
  },
  uploaded_by: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
  // imageUrl: {
  //   type: String,
  // },
}, {
  timestamps: true,

});



module.exports = mongoose.model('Recipe', recipeSchema);