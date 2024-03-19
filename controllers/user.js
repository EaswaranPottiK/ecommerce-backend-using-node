const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config();

const userRegistration = async(req,res) =>{
    //to increase complexity, i have used salt 
    
    try{
        const newUser = new userModel({
            ...req.body,
        })
        await newUser.save();
    
        return res.json({
            success:true,
            message:"User registration successful, please login to continue 🙂",
        });
    }
    catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"Please provide a different email id",
        });
    }

}

const userLogin = async(req,res) =>{
    
    const user = await userModel.findOne({email:req.body.email})
    if(!user){
        return res.json({
            success:false,
            message:"Username or password is Invalid",
        });
    }
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password) // gives a boolean value
    if (!isPasswordCorrect){
        return res.json({
            success:false,
            message:"Username or password is Invalid",
        })
    }
    const payload = {
        name: user.firstName,
        role: user.role,
        exp: Math.floor((new Date().getTime())/1000) +36000 //this is called unix time or epoch time - time in sec + 1 hr 
    }
    const token = jwt.sign(payload,process.env.JWT_SECRET_KEY)
    return res.json({
        success:true,
        message:"User Logged in successfully",
        token:token
    });
}

const userLogout = async(req,res) =>{
    return res.json({
        success:true,
        message:"Dummy: User Logout is successful",
    });
}

const controllers = {
    userRegistration,
    userLogin,
    userLogout
}

module.exports = controllers

