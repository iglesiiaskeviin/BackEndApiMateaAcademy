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

module.exports = {
    findAllTheUsers,
    addUser,
    deleteUser
}