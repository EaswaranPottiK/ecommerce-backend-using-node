const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const authorization = (req,res, next)=>{
    
    // anybody can go to jwt.io and modify role to admin - so there is not security to avoid this we use 
    // jwt.verify(token, secret key on .env file) - this is where signature is used 
    try{
        const data = jwt.verify(req.headers.authorization, process.env.JWT_SECRET_KEY)
    }
    catch(err){
        return res.json({
            success: true,
            message:"Token was modified (invalid signature) - form auth middlewhare"
        })
    }
    
    const payload = jwt.decode(req.headers.authorization)
    if (payload.role === 'admin'){
        next();
    }
    else {
        return res.status(404).json({
            success: false,
            message:"Forbidden"
        })
    }
}

module.exports = authorization

