import express from 'express'
import { homePage, loginPage, registrationPage, userLogin, userRegistration } from '../controller/userController.js'

const router = express.Router()

router.post('/registration',userRegistration)
router.post('/login',userLogin)
router.get('/login',loginPage)
router.get('/',homePage)
router.get('/registration',registrationPage)



export default router