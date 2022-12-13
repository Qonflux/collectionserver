const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
  completed: {
    type: Boolean,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  genres: {
    type: Array,
    required: true
  },
  igdbId: {
    type: Number,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)