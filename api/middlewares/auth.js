const { ClientError } = require('../utils/clientError');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({path:'api/.env'});
const User = require('../models/User');
const { catchAsyncErrors } = require('../middlewares/cathcAsync');

const isAuthenticatedUser = (req, res, next)=>{
    const { token } = req.cookies;
    if(!token) throw new ClientError('Login first to access this resource', 401);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
};



const authorizedProfile = catchAsyncErrors(async(req, res, next)=>{
    req.user = await User.findByPk(req.user.userId);
    if(req.user.profile!=='admin'){
        throw new ClientError(`Profile [${req.user.profile}] is not allowed to access this resource`, 403);
    }
    next();
});


module.exports = { 
    isAuthenticatedUser,
    authorizedProfile,
 };