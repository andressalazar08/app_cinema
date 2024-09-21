const User = require('../models/User');
const bcrypt = require('bcrypt');
const { catchAsyncErrors } = require('../middlewares/cathcAsync');

const registerUser = catchAsyncErrors(async(req, res)=>{

    const { name, email, password, profile } = req.body;


        const existingUSer = await User.findOne({where:{email:email}});
        if(existingUSer){
            return res.status(400).json({message:'User already exists, cannot create a user with this email'});

        }

        //encrypt password before create
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
        }catch(hashError){
            return {message:'Internal error on password hashing'}
        }

        const newUser=await User.create({
            name, 
            email,
            password:hashedPassword,
            profile,
        })
        return res.status(201).json({message:'User registered successfully', user:newUser});

});

module.exports = { 
    registerUser,
}