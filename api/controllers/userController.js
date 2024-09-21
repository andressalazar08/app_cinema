const User = require('../models/User');
const bcrypt = require('bcrypt');
const { catchAsyncErrors } = require('../middlewares/cathcAsync');
const { ClientError } = require('../utils/clientError');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path:'api/.env'});

const registerUser = catchAsyncErrors(async(req, res, next)=>{

    const { name, email, password, profile } = req.body;


        const existingUSer = await User.findOne({where:{email:email}});
        if(existingUSer){
            return next(new ClientError('User already exists, cannot create a user with this email', 409));

        }

        //encrypt password before create
        let hashedPassword = await bcrypt.hash(password,10);;
      
        const newUser=await User.create({
            name, 
            email,
            password:hashedPassword,
            profile,
        })
        return res.status(201).json({message:'User registered successfully', user:newUser});

});

//controlador para el login de usuarios
const loginUser = catchAsyncErrors(async(req,res, next)=>{
    const { email, password } = req.body;
    const user = await User.findOne({where:{email:email}});
    if(!user) return next(new ClientError('User not found', 401));
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid) return next(new ClientError('Wrong password',401));
    //if user email and password are correct a new token is generated
    const token = jwt.sign({userId:user.id}, process.env.SECRET_KEY, {expiresIn:'1h'});
    res.cookie('token', token, {httpOnly:true, maxAge:3600000});
    return res.status(200).json({message:'User successfully logged in'});
    
});


//controller para el logout
const logoutUser = catchAsyncErrors(async(req, res, next)=>{
    res.clearCookie('token');
    return res.status(200).json({message:'User successfully logged out'});
})


//controller para el get data del user
const getUserInfo = catchAsyncErrors(async(req, res, next)=>{
    const user = await User.findByPk(req.user.userId,{
        attributes:['name', 'email', 'profile']
    });
    return res.status(200).json({
        message:'User found',
        user
    })
});


module.exports = { 
    registerUser,
    loginUser,
    logoutUser,
    getUserInfo,

}