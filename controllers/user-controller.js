const userModel = require('../models/user-model');

const getAllUsers = async (req, res) => {
    try {
        const user = await userModel.getAllUsers();
        if(!user) res.json({ message: 'User Not Found' });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Get All Users' });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if(!user) res.json({ message: 'User Not Found' });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.json({ message: 'Error Get User By Id' });
    }
}

const addUser = async (req,res) => {
    try{
        const newUserId = await userModel.addUser(req,body)
        req.status(200).json({id:newUserId,...req.body})
    } catch (error){
        res.status(500).json({message:'Error Insert Data',error})
        console.log(error);
    }
}

const deleteUser  = async (req, res) => {
    const userId = req.params.id; 
    try {
        const result = await userModel.deleteUser (userId);
        if (result) {
            return res.status(200).json({ message: `User  with ID ${userId} has been deleted.` });
        } else {
            return res.status(404).json({ message: `No user found with ID ${userId}.` });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

module.exports = { getAllUsers, getUserById, addUser, deleteUser };