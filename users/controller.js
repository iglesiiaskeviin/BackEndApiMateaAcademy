const model = require("../users/model.js");


async function findAllTheUsers(){
    return await model.getAllUsers();
}


module.exports = {
    findAllTheUsers
}