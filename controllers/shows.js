import ErrorResponse from '../utils/errorResponse.js'
import asyncHandler from '../middleware/async.js'
import Show from '../models/Show.js'

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

export { getShows }
