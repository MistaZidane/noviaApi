import  jwt = require("jsonwebtoken");
const  config = require("../config/config");
import userModel = require("../Models/userModel");



const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    // console.log(bearerToken);
    
    req.token = bearerToken;
    jwt.verify(bearerToken, config.secret, (err, decoded) => {
      if (err) {
        console.log("unatho");
        
        return res.status(401).send({ message: "Unauthorized!", auth:false });
      }
      req.userId = decoded.id;
      console.log("authenticated");
      
      next();
    });
    
  }
  else{
    return res.status(403).send({ message: "No token provided!", auth:false  });
  }

  // if (!token) {
    
  // }

  // jwt.verify(token, config.secret, (err, decoded) => {
  //   if (err) {
  //     return res.status(401).send({ message: "Unauthorized!", auth:false });
  //   }
  //   req.userId = decoded.id;
  //   console.log("authenticated");
    
  //   next();
  // });
};

export default {verifyToken} ;