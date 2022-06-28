

import mongoose from 'mongoose'

export const connectDB = (dbms) => {
    mongoose.connect(dbms)
.then(() => {
    console.log(`Connected Successfully`)
}).catch((err) => {
    console.log({
        msg:`Ooops Unable to Connect`,
        error:err
    })
})
}