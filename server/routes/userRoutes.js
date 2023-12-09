import { Router } from 'express'
import { Login, Signup } from '../controllers/UserAuth.js'

const router = Router()

router.post('/signup', Signup)
router.post('/login', Login)

export const  userRouter = router