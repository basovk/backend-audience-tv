import ErrorResponse from '../utils/errorResponse.js'
import asyncHandler from '../middleware/async.js'
import Program from '../models/Program.js'

// @desc        Get All Programs
// @route       GET /api/programs
// @access      Public
const getPrograms = asyncHandler(async (req, res, next) => {
  const programs = await Program.find().populate('shows')

  res.status(200).json({
    success: true,
    data: programs
  })
})

// @desc        Get Single Program
// @route       GET /api/programs/:id
// @access      Public
const getProgram = asyncHandler(async (req, res, next) => {
  const program = await Program.findById(req.params.id)

  if (!program) {
    return next(
      new ErrorResponse(`Program not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(200).json({ success: true, data: program })
})

export { getProgram, getPrograms }
