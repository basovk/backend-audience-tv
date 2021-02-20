import User from '../models/User.js'
import ErrorResponse from '../utils/errorResponse.js'
import asyncHandler from '../middleware/async.js'

// @desc        Register User
// @route       POST /api/auth/register
// @access      Public
const register = asyncHandler(async (req, res, next) => {
  const { name, email, password, address, gender, birthdate } = req.body

  const userExists = await User.findOne({ email })

  if (userExists) {
    return next(new ErrorResponse('User with that email already exists', 400))
  }

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    address,
    gender,
    birthdate
  })

  sendTokenResponse(user, 200, res)
})

// @desc        Login User
// @route       POST /api/auth/login
// @access      Public
const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body

  // Validate email and password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400))
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password')

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401))
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password)

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401))
  }

  sendTokenResponse(user, 200, res)
})

// @desc        Log user out / clear cookie
// @route       GET /api/auth/logout
// @access      Private
const logout = asyncHandler(async (req, res, next) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  })

  res.status(200).json({
    success: true,
    data: {}
  })
})

// @desc        Get current logged in user
// @route       GET /api/auth/me
// @access      Private
const getMe = asyncHandler(async (req, res, next) => {
  // Imamo pristup req.user
  const user = await User.findById(req.user.id)

  res.status(200).json({
    success: true,
    data: user
  })
})

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken()

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  }

  // In production looks for https
  if (process.env.NODE_ENV === 'production') {
    options.secure = true
  }

  res.status(statusCode).cookie('token', token, options).json({
    success: true,
    token
  })
}

export { register, login, logout, getMe }
