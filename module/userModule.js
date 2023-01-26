import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    event: {
        type: String,
        trim: true,
        required: true,
        min: 100,
        max: 1000,
    },
    ranking: {
        type: Number,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    country: {
        type: String,
        trim: true,
        required: true
    },
    dob: {
        type: Date,
        trim: true,
        required: true,
    },
    score: {
        type: Number,
        trim: true,
        minLength: [4, "length should be 4 char"],
        maxLength: [6, "length should not grater than be 4 char"]
    }
})

const Usermodule = new mongoose.model("Usermodule", userSchema)

export default Usermodule