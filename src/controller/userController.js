import userModel from "../models/userModel.js"
import bcrypt from 'bcryptjs'

export const userRegistration = async (req,res) => {
    try {
        const password = req.body.password
        const cPassword = req.body.confirmPassword
        if(password === cPassword){            
            const user = new userModel({
                first_name:req.body.first_name,
                last_name:req.body.last_name,
                email:req.body.email,
                phone:req.body.phone,
                password:req.body.password,
                
            })
            const registered = await user.save()
            res.status(201).render('index') 
        }else{
            res.send({msg:`password didn't match`})
        }
               
    } catch (error) {
        res.status(404).json({
            msg:`Ooooops You've done wrong request.`,
            err:error
        }) 
        console.log(error)       
    }    
}
export const userLogin = async (req,res,next) =>{
    try {
        const email = req.body.email
        const password = req.body.password
        const userLog = await userModel.findOne({email:email})
        const isMatch = await bcrypt.compare(password,userLog.password)
        if(isMatch){
            res.status(200).render('index')
            console.log(userLog.password)
        }else{
            res.send(`Invalid login details`)
        }
                        
    } catch (error) {
        res.status(404).json({
            msg:`Invalid Login Credetials`,
            err:error
        })
        
    }
}
export const homePage = (req,res,next) =>{
    res.render('index')
}
export const registrationPage = (req,res,next) =>{
    res.render('registration')
}
export const loginPage = (req,res,next) =>{
    res.render('login')
}