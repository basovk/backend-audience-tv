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
  usersWatched: {
    type: [Object]
  },
  numberOfUsersWatched: {
    type: Number
  },
  program: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

ShowSchema.virtual('users', {
  ref: 'User',
  localField: '_id',
  foreignField: 'show',
  justOne: false
})

const Show = mongoose.model('Show', ShowSchema)

export default Show
