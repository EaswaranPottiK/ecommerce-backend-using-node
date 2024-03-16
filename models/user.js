const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        default: true
    },
    lastName:{
        type: String,
        default: true
    },
    email:{
        type: String,
        default: true,
        unique: true
    },
    password:{
        type: String,
        default: true
    },
    role:{
        type: String,
        default: true
    }
});

//this is a mongoose middlewhare - it instruct mongoose to do this step before you save it 
userSchema.pre("save",function(){ // here arrow funtion wont work as this behaves differently 
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(this.password,salt)
    this.password = hash;
})

const userModel = mongoose.model("users", userSchema)
module.exports = userModel;