const model = require("./model");


async function findAllTheSongs(){
    return await model.getAllSongs();
}

module.exports = {
    findAllTheSongs,
}