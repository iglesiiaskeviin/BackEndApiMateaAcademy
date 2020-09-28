const model = require("./model.js");


async function findAllTheSongs(){
    return await model.getAllSongs();
}

async function addSong(song){
    return await model.addModelSong(song);
}

async function deleteSong(querySong){
    console.log("Entrando en deleteSong")
    return await model.deleteModelSong(querySong);
}



module.exports = {
    findAllTheSongs,
    addSong,
    deleteSong
}