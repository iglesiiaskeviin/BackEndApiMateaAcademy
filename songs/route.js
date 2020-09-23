const songController = require('./controller.js');


async function getAllSongs(req, res){
    try {
        var findSong = await  songController.findAllTheSongs();
        res.status(200).send(findSong);
    } catch (e) {
        res.status(500).send(`Han error has ocurred getting all songs : ${e}`)
    }
}


async function onPostSong(req, res){
    console.log("Entrando en onPostSong")
    try {
        await songController.addSong(req.body);
        res.status(201).send("Se ha posteado con éxito la canción!")
    } catch (error) {
        
    }
}

module.exports = {
    getAllSongs,
    onPostSong
}