// seed-a bazu podataka sa podacima iz _data folder-a
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import colors from 'colors'

// Load env var
dotenv.config({ path: './config/config.env' })

// Load models
import User from './models/User.js'
import Program from './models/Program.js'
import Show from './models/Show.js'

// Connect to DB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})

// Read data
import users from './_data/users.js'
import programs from './_data/programs.js'
import shows from './_data/shows.js'

// Import into DB
const importData = async () => {
  try {
    await Program.create(programs)
    await User.create(users)
    await Show.create(shows)

    console.log('Data Imported...'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
  }
}

// Delete data
const deleteData = async () => {
  try {
    await Program.deleteMany()
    await User.deleteMany()
    await Show.deleteMany()

    console.log('Data Destroyed...'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
  }
}

if (process.argv[2] === '-i') {
  importData()
} else if (process.argv[2] === '-d') {
  deleteData()
}
