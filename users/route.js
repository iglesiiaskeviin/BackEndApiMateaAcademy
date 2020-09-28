const userController = require('../users/controller.js');


async function getAllUsers(req, res){
    try {
        var findedUser = await  userController.findAllTheUsers();
        res.status(200).send(findedUser);
    } catch (e) {
        res.status(500).send(`Han error has ocurred getting all users : ${e}`)
    }
}

async function onPostAddUser(req, res){
    try {
        await userController.addUser(req.body);
        res.status(201).send("Se ha añadido con éxito este nuevo usuario!")
    } catch (error) {
        res.send(error)
    }
}


module.exports = {
    getAllUsers,
    onPostAddUser
}