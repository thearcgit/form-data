
import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema({
    first_name:{type:String,uppercase:true},
    last_name:{type:String,uppercase:true},
    email:{type:String,unique:true},
    phone:{type:Number,unique:true},
    password:{type:String,},
    cPassword:{type:String,}
})
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        console.log(`password is ${this.password}`)
        this.password = await bcrypt.hash(this.password,10)
        console.log(`password is ${this.password}`)
    }    
    next()
})

const userModel = mongoose.model('user',userSchema)

export default userModel