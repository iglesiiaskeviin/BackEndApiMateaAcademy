const model = require("../users/model.js");


async function findAllTheUsers(){
    return await model.getAllUsers();
}


async function addUser(user){
    return await model.addModelUser(user);
}

async function deleteUser(id){
    return await model.deleteModelUser(id);
}

async function updateUser(id, bod){
    return await model.updateModelUser(id, bod);
}


async function addFavoriteSong(user, song){
    return await model.updateModelUserFavoriteSongs(user, song)
}

module.exports = {
    findAllTheUsers,
    addUser,
    deleteUser,
    updateUser,
    addFavoriteSong
}