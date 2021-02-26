import express from 'express'
import {
  getShows,
  getShow,
  getShowsWithUsers,
  userWatchingShow
} from '../controllers/shows.js'
import Show from '../models/Show.js'

import { auth } from '../middleware/auth.js'

import { advancedResults } from '../middleware/advancedResults.js'

const router = express.Router()

router.route('/').get(advancedResults(Show, 'users'), getShows)
router.route('/info').get(getShowsWithUsers)
router.route('/:id').get(getShow).put(auth, userWatchingShow)

export default router
