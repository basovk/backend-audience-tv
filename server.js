import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import colors from 'colors'
import morgan from 'morgan'
import errorHandler from './middleware/error.js'
import cookieParser from 'cookie-parser'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from 'helmet'
import xss from 'xss-clean'
import cors from 'cors'

// Database
import connectDB from './config/db.js'

// load envs
dotenv.config({ path: './config/config.env' })

// Connect to database
connectDB()

// Route files
import programs from './routes/programs.js'
import auth from './routes/auth.js'
import shows from './routes/shows.js'

// Initialize express
const app = express()

// Body parses to use data from req.body
app.use(express.json())

// Cookie parser
app.use(cookieParser())

// Sanitize data
app.use(mongoSanitize())

// Set security headers
app.use(helmet())

// Prevent XSS attacks
app.use(xss())

// Enable CORS
app.use(cors())

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Mount routers
app.use('/api/programs', programs)
app.use('/api/auth', auth)
app.use('/api/shows', shows)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red)
  // Close server and exit process(app to fail)
  server.close(() => process.exit(1))
})
