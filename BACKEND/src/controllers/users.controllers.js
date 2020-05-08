const usersController = {};


usersController.getUsers = (req, res, next) => res.send('Users')

usersController.createUser = (req, res, next) => res.send('Users')

usersController.deleteUser = (req, res, next) => res.send('Users')


module.exports = usersController;