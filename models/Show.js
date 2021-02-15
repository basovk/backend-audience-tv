import mongoose from 'mongoose'

const ShowSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a name of the show']
  },
  timeStart: {
    type: String,
    required: [true, 'Please add a starting time of the show.']
  },
  timeEnd: {
    type: String,
    required: [true, 'Please add ending time of the show.']
  },
  time: {
    type: String,
    required: [true, 'Please add a time']
  },
  next: {
    type: String
  },
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program',
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

const Show = mongoose.model('Show', ShowSchema)

export default Show
