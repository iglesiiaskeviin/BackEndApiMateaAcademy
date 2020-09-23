const model = require("./model.js");


async function findAllTheSongs(){
    return await model.getAllSongs();
}

async function addSong(song){
    console.log("Entrando en addSong")
    return await model.addModelSong(song);
}

module.exports = {
    findAllTheSongs,
    addSong
}