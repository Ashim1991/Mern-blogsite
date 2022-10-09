const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  const{name, email, password} = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
      const oldUser = await User.findOne({ email });
      if(oldUser) {
          return res.status(400).send('User already exists');
      }
      await User.create({name, email, password: encryptedPassword});
      res.send({message: 'User created successfully'});
  }catch(err){
      res.status(400).send(err);
  }

};

const login = async (req, res, next) => {
  const{email, password} = req.body;
    try {
        const user = await User.findOne({ email });
        if(!user) {
            return res.status(400).send('User does not exist');
        }
        if(!await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({id: user._id}, JWT_SECRET);
            if (res.statusCode === 200) {
                return res.json( {status: 'success', data : token} )
            }else{
                return res.status(400).send('error');
            }            
        }
        res.json({status: 'error',error: 'Invalid password'});  
            
    }catch(err){
        res.status(400).send(err);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        if(!users) {
            return res.status(400).send('No users found');
        }
        res.json({status: 'success', data: users});
    }catch(err){
        res.status(400).send(err);
    }
}


const logout = async (req, res, next) => {
  try {
      res.send({message: 'User logged out successfully'});
  }catch(err){
      res.status(400).send(err);
  }
}



exports.logout = logout;
exports.signup = signup;
exports.getUsers = getUsers;
exports.login = login;
