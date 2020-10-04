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
        res.status(201).send("User added correcly!")
    } catch (error) {
        res.send(error)
    }
}

async function onDeleteUser(req, res){
    let id = req.params.userId;
    try {
        await userController.deleteUser(id);
        res.status(201).send(`The user with id : ${id} has been deleted!`);
    } catch (error) {
        res.send(error)
    }

}

async function onUpdateUser(req, res){
    var id = req.params.id;
    var bod = req.body;
    try {
        await userController.updateUser(id, bod);
        res.status(201).send("This user will be modify correectly")
    } catch (error) {
        res.status(500).send("Han error has ocurred server error (500)");
    }
}

async function onModifyUserFavSongs(req, res){
    try {
        await userController.modifyUserFavSongs(id, bod);
        res.status(201).send("The favorite song of this user will be modify correectly");
    } catch (error) {
        res.status(500).send("Han error has ocurred server error (500)")
    }
}


async function onAddFavoriteSongToUser(req, res){
    const id = req.params.userId;
    const song = req.params.songName;
    try {
        await userController.addFavoriteSong(id, song)
        res.status(201).send('Song added correcly to user');
    } catch (error) {
        res.status(500).send(`This song can't be added to user ${error}`);
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