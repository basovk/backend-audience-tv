import express from 'express'
import { getPrograms, getProgram } from '../controllers/programs.js'
import Program from '../models/Program.js'

const router = express.Router()

router.route('/').get(getPrograms)
router.route('/:id').get(getProgram)

export default router
