import express from 'express'
import {
  getShows,
  getShow,
  getShowsWithUsers,
  userWatchingShow
} from '../controllers/shows.js'

import { auth } from '../middleware/auth.js'

const router = express.Router()

router.route('/').get(getShows)
router.route('/info').get(getShowsWithUsers)
router.route('/:id').get(getShow).put(auth, userWatchingShow)

export default router
