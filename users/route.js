const userController = require('../users/controller.js');


async function getAllUsers(req, res){
    try {
        var findedUser = await  userController.findAllTheUsers();
        res.status(200).send(findedUser);
    } catch (e) {
        res.status(500).send(`Ha ocurrido un error al obtener a todos los usuarios : ${e}`)
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

async function onDeleteUser(req, res){
    let id = req.params.userId;
    try {
        await userController.deleteUser(id);
        res.status(201).send(`Usuario con id : ${id} ha sido borrado exitosamente!`);
    } catch (error) {
        res.send(error)
    }

}


module.exports = {
    getAllUsers,
    onPostAddUser,
    onDeleteUser
}