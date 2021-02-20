import mongoose from 'mongoose'

const ProgramSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name of the program']
    },
    slug: {
      type: String,
      required: true
    },
    image: {
      // u bazi podataka samo filename
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now()
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

// Reverse populate with virtuals to show shows but not add them in database program
ProgramSchema.virtual('shows', {
  ref: 'Show',
  localField: '_id',
  foreignField: 'program',
  justOne: false
})

const Program = mongoose.model('Program', ProgramSchema)

export default Program
