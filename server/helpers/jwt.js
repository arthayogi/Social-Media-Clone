const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET
// console.log(secret);
const signToken = (payload)=>{
    // console.log(payload,"<<<payload");
    return jwt.sign(payload, secret)
}

const verifyToken = (token)=>{
    // console.log(secret, "=========");
    return jwt.verify(token, secret)
}

module.exports = { signToken, verifyToken }