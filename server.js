import express from "express"
import mongoose from "mongoose"
import * as dotenv from 'dotenv'
import postRoutes from './routes/posts.js'


dotenv.config();
const port = process.env.PORT || 3000
const app = express();

app.use(express.json())

const connectDB = async () => {

    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            UseUnifiedTopology: true
        })

        console.log("MongoDB connected")
    } catch(err){
        console.error(err.message)
        process.exit(1)

    }
}



app.use('/api/posts', postRoutes)

connectDB().then( () => {
    app.listen(port, () => console.log(`listening on port ${port}`))
}).catch(err => console.log(err))



