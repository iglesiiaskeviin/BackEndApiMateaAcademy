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

async function onUpdateUser(req, res){
    var id = req.params.id;
    var bod = req.body;
    try {
        await userController.updateUser(id, bod);
        res.status(201).send("Se ha modificado con éxito este usuario")
    } catch (error) {
        res.status(500).send("Un error ha ocurrido");
    }
}

async function onModifyUserFavSongs(req, res){
    try {
        await userController.modifyUserFavSongs(id, bod);
        res.status(201).send("Se ha modificado la canción favorita de este usuario");
    } catch (error) {
        res.status(500).send("Un error ha ocurrido")
    }
}


async function onAddFavoriteSongToUser(req, res){
    console.log("Entro en onAddFavoriteSongToUser")
    const id = req.params.userId;
    const song = req.params.songName;
    try {
        await userController.addFavoriteSong(id, song)
        res.status(201).send("Se le ha agregado correctamente esa canción a este usuario");
    } catch (error) {
        res.status(500).send(`No se ha podido agregar esa canción a este usuario ${error}`);
    }
}



module.exports = {
    getAllUsers,
    onPostAddUser,
    onDeleteUser,
    onUpdateUser,
    onModifyUserFavSongs,
    onAddFavoriteSongToUser
}