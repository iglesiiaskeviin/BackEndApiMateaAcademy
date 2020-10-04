const Song = require('../songs/model.js'); 

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
    name: String,
    lastname: String,
    email: String,
    age: String,
    favoriteSongs: [{type: Schema.Types.ObjectID, ref:'songs'}],
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

const findUser = async(nameUser) => {
    const result = await User.findOne({ name: nameUser});
    return result;
};

const findeSong = async(nameSong) => {
    const result = await Song.Songs.findOne({ name: nameSong });
    return result;
};

async function updateModelUser(id, bod){
    var myId = id;
    return await User.findOne({_id: myId}, function(error, foundedObj){
        if (error) {
            console.log(`Han error has ocurred ${error}`);
        }else{
            if (!foundedObj) {
                console.log("This element don't exist");
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
    const succesUser = await findUser(userId);
    const succesSong = await findeSong(songName);
    await User.findByIdAndUpdate({ _id: succesUser._id }, { $set: { favoriteSongs: succesSong._id }});
}

module.exports = {
    getAllUsers,
    addModelUser,
    deleteModelUser,
    updateModelUser,
    updateModelUserFavoriteSongs,
    findUser,
    findeSong
}