import express from 'express'
import { register, login, logout, getMe } from '../controllers/auth.js'

import { auth } from '../middleware/auth.js'

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)
// u get me mora ici auth
router.get('/me', auth, getMe)

export default router
