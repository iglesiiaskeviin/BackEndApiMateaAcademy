const songController = require('./controller.js');


async function getAllSongs(req, res){
    try {
        var findSong = await  songController.findAllTheSongs();
        res.status(200).send(findSong);
    } catch (e) {
        res.status(500).send(`Han error has ocurred getting all songs : ${e}`)
    }
}


async function onPostAddSong(req, res){
    try {
        await songController.addSong(req.body);
        res.status(201).send("Se ha añadido con éxito esta nueva canción!")
    } catch (error) {
        res.send(error)
    }
}

async function onDeleteSong(req, res){
    let query = req.params.songId;
    console.log("Entrando en onDeleteSong")
    try {
        await songController.deleteSong(query);
        res.status(201).send("Se ha eliminado correctamente esta canción!");
    } catch (error) {
        res.send(error)
    }

}

module.exports = {
    getAllSongs,
    onPostAddSong,
    onDeleteSong
}