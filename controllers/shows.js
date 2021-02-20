import ErrorResponse from '../utils/errorResponse.js'
import asyncHandler from '../middleware/async.js'
import Show from '../models/Show.js'
import User from '../models/User.js'

// @desc        Get All Shows and program
// @route       GET /api/shows
// @access      Public
const getShows = asyncHandler(async (req, res, next) => {
  const shows = await Program.find().populate({ path: 'program' })

  res.status(200).json({
    success: true,
    data: shows
  })
})

// @desc        Get Single Show with users
// @route       GET /api/shows/:id
// @access      Public
const getShow = asyncHandler(async (req, res, next) => {
  const show = await Show.findById(req.params.id)

  res.status(200).json({
    success: true,
    data: show
  })
})

// @desc        Get All Shows and users
// @route       GET /api/shows/info
// @access      Public
const getShowsWithUsers = asyncHandler(async (req, res, next) => {
  const shows = await Show.find().populate({ path: 'user' })

  res.status(200).json({
    success: true,
    data: shows
  })
})

// @desc        Update the user is watching show with this id
// @route       PUT /api/shows/:id
// @access      Private
const userWatchingShow = asyncHandler(async (req, res, next) => {
  let show = await Show.findById(req.params.id)

  if (!show) {
    return next(
      new ErrorResponse(`No show with the id of ${req.params.id}`, 404)
    )
  }

  let user = await User.findById(req.user.id)

  console.log(user)
  if (show.users.find((usr) => usr.email === user.email)) {
    return next(
      new ErrorResponse(`You've already said you are watching this show.`, 404)
    )
  }

  show = await Show.findByIdAndUpdate(
    req.params.id,
    { $push: { users: user } },
    {
      new: true,
      runValidators: true
    }
  )

  res.status(200).json({
    success: true,
    data: show
  })
})

export { getShows, getShow, getShowsWithUsers, userWatchingShow }
