import jwt from 'jsonwebtoken'
import asyncHandler from './async.js'
import ErrorResponse from '../utils/errorResponse.js'
import User from '../models/User.js'

// Protect routes, only registered and verified users
const auth = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1]
    // Set token from cookie
  } // else if (req.cookies.token) {
  // token = req.cookies.token
  // }

  // Make sure token exists
  if (!token) {
    return next(new ErrorResponse('Not authorized to access this route', 401))
  }

  try {
    // Verify token
    // { id: 1, iat: xxx, exp: xxx}
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // currently logged in user
    req.user = await User.findById(decoded.id)

    next()
  } catch (error) {
    return next(new ErrorResponse('Not authorized to access this route', 401))
  }
})

export { auth }
