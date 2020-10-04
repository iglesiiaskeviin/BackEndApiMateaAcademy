const songsSchema = require('../songs/model.js'); 

const moongose = require("mongoose");
const { ObjectID } = require('bson');

const db = 'mongodb+srv://kevin:123asd@cluster0.vahxu.azure.mongodb.net/proyectoModulo3?retryWrites=true&w=majority'
moongose.connect(db,
{ 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log("An error has ocurred:" + err));

const Schema = moongose.Schema;
/*  */
const usersSchema = new Schema({
    "name": String,
    "lastname": String,
    "email": String,
    "age": String,
    "favoriteSongs": [{type: Object}],
}, {collection: "users"});

const User = moongose.model("users", usersSchema);



async function getAllUsers(){
    return await User.find({});
}

async function addModelUser(user){
    var newU = new User(user);
    await newU.save();
}


async function deleteModelUser(id){
    await User.findByIdAndRemove(id)
}

async function updateModelUser(id, bod){
    var myId = id;
    return await User.findOne({_id: myId}, function(error, foundedObj){
        if (error) {
            console.log(`Ha ocurrido un error ${error}`);
        }else{
            if (!foundedObj) {
                console.log("Este objeto no existe");
            } else {
                if (bod.name) {
                    foundedObj.name = bod.name;
                }

                if (bod.lastname) {
                    foundedObj.lastname = bod.lastname;
                }

                if (bod.email) {
                    foundedObj.email = bod.email;
                }

                if (bod.age) {
                    foundedObj.age = bod.age;
                }

                foundedObj.save();
            }
        }
    })
}

const updateModelUserFavoriteSongs = async(userId, songName) => {
    console.log("Entro en updateModelUserFavoriteSongs")
    console.log(userId)
    console.log(songName)
    const query = {name: songName};
    const finded = await songsSchema.Song.findOne(query)
    console.log("Llegada: "+finded)
    return await User.findOneAndUpdate({_id: userId},{$addToSet: {favoriteSongs: finded._id}}, function(error, success){
        if (error) {
            console.log(error)
        }else{
            console.log(success)
        }
    })
}

module.exports = {
    getAllUsers,
    addModelUser,
    deleteModelUser,
    updateModelUser,
    updateModelUserFavoriteSongs
}