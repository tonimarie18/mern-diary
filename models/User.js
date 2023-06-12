import {Schema, model} from 'mongoose'



const UserSchema = new Schema({


    email: {
        type: String,
        required: true,
    },
    
    password: {
        type: String,
        required: true
    }
},
{
    collection: 'users',
    timestamps: true
})

export default model('user', UserSchema)