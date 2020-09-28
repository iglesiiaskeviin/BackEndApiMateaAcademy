const model = require("../users/model.js");


async function findAllTheUsers(){
    return await model.getAllUsers();
}


async function addUser(user){
    return await model.addModelUser(user);
}


module.exports = {
    findAllTheUsers,
    addUser
}