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
        res.status(500).send("Un error ha ocurrido");
    }
}

async function onDeleteSong(req, res){
    let id = req.params.songId;
    try {
        await songController.deleteSong(id);
        res.status(201).send(`Canción con id : ${id} ha sido borrado exitosamente!`);
    } catch (error) {
        res.status(500).send("Un error ha ocurrido");
    }

}

async function onUpdateSong(req, res){
    var id = req.params.id;
    var bod = req.body;
    try {
        await songController.updateSong(id, bod);
        res.status(201).send("Se ha modificado con éxito esta canción")
    } catch (error) {
        res.status(500).send("Un error ha ocurrido");
    }
}

module.exports = {
    getAllSongs,
    onPostAddSong,
    onDeleteSong,
    onUpdateSong
}