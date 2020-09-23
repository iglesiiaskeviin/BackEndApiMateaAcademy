const userController = require('../users/controller.js');


async function getAllUsers(req, res){
    try {
        var findedUser = await  userController.findAllTheUsers();
        res.status(200).send(findedUser);
    } catch (e) {
        res.status(500).send(`Han error has ocurred getting all users : ${e}`)
    }
}



module.exports = {
    getAllUsers
}