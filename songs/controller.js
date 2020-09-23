const model = require("./model.js");


async function findAllTheSongs(){
    return await model.getAllSongs();
}

module.exports = {
    findAllTheSongs,
}