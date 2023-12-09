import User from "../models/userModel.js";


export const getALlUsers = async (req, res) =>{
    try{
        const users = await User.find()

        if(!users){
            return res.status(404).json({ message : "No users available!"})
        }

        return res.status(200).json({users})

    }catch(err){
        return res.status(500).json({ message : err.message})
    }
}