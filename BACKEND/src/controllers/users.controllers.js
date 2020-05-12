const usersController = {};


const UserModel = require('../models/User')

usersController.getUsers = async (req, res, next) =>{
    const users = await UserModel.find();
    res.json(users)
}


usersController.createUser = async  (req, res, next) => {
    const { username } = req.body;
    const userCreated = new UserModel ({
        username : username
    })
    await userCreated.save()
    res.json({ message : 'User Created' })
}


usersController.deleteUser = async  (req, res, next) => {
    const userDeleted = await UserModel.findByIdAndDelete(req.params.id);
    res.json({ message : 'User Deleted' })
}


module.exports = usersController;