import express from 'express'
import { getShows } from '../controllers/shows.js'
import Show from '../models/Show.js'

const router = express.Router()

router.route('/').get(getShows)

export default router
