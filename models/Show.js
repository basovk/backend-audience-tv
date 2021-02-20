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
  users: {
    type: [Object]
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

/*
// Static method to get average of cost tuitions
ShowSchema.statics.getAverageAge = async function (bootcampId) {
  // calculate average age
  console.log('Calculating avg cost...'.blue)

  const obj = await this.aggregate([
    {
      $match: { bootcamp: bootcampId }
    },
    {
      $group: {
        _id: '$bootcamp',
        averageCost: { $avg: '$tuition' }
      }
    }
  ])

  console.log(obj)

  try {
    await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
      averageCost: Math.ceil(obj[0].averageCost / 10) * 10
    })
  } catch (error) {
    console.error(error)
  }
}

*/

const Show = mongoose.model('Show', ShowSchema)

export default Show
