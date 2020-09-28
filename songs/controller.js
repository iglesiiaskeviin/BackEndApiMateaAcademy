const model = require("./model.js");


async function findAllTheSongs(){
    return await model.getAllSongs();
}

async function addSong(song){
    return await model.addModelSong(song);
}

async function deleteSong(id){
    return await model.deleteModelSong(id);
}

async function updateSong(id, bod){
    return await model.updateModelSong(id, bod);
}



module.exports = {
    findAllTheSongs,
    addSong,
    deleteSong,
    updateSong
}