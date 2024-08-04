import jwt from "jsonwebtoken"
//Create Token
const createToken = (data)=>{
    return jwt.sign(data, process.env.JWT_SECRET_KEY,{
        expiresIn: "1d"
    })
}
//Verify Token
const verifyToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
}

export {
    createToken,
    verifyToken
}