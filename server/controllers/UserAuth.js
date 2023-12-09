//importing Libraries 
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

//importing modules/files'
import User from '../models/userModel.js'

//Signup route
export const Signup = async (req, res) =>{
try{
    const { 
        firstName, 
        lastName, 
        email, 
        password } = req.body

    if(!firstName || !lastName || !email || !password){

      return  res.status(400).json({ "message" : "All fileds are required!"})

    }

    const salt =  bcrypt.genSaltSync(10)

    const encryptPassword = bcrypt.hashSync(password,salt)

    const newUser = await new User({
        firstName,
        lastName,
        email,
        password: encryptPassword
    })

    const savedUser = await newUser.save()
    
    if(!savedUser){
      return  res.status(400).json({ message : "Singup was unsuccesful"})
    }

    return res.status(201).json({ message: "User created successfully", savedUser})

}catch(err){
  return  res.status(505).json({ message : err.message})
 }

}

//Login controllers
export const Login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      if (!email || !password) {
        return res.status(403).json({ "message": "All fields are required" });
      }
  
      const user = await User.findOne({ email: email });
  
      if (!user) {
        return res.status(404).json({ "message": "No user found!" });
      }
  
      const verifyPassword = bcrypt.compareSync(password, user.password);
  
      if (!verifyPassword) {
        return res.status(401).json({ "message" : "Incorrect password" });
      }
  
      const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY);
  
      res.cookie('token', token, { httpOnly: true });
  
      return res.status(200).json({ user, message: 'Login successful' });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  };

