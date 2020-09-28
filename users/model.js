const moongose = require("mongoose");

const db = 'mongodb+srv://kevin:123asd@cluster0.vahxu.azure.mongodb.net/proyectoModulo3?retryWrites=true&w=majority'
moongose.connect(db,
{ 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log("An error has ocurred:" + err));

const Schema = moongose.Schema;

const usersSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    age: Number,
    artist: String,
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
    console.log(myId);
    return await User.findOne({_id: myId}, function(error, foundedObj){
        if (error) {
            console.log(`Ha ocurrido un error ${error}`);
        }else{
            if (!foundedObj) {
                console.log("Este objeto no existe");
            } else{
                if (bod.name) {
                    foundedObj.name = bod.name;
                }

                if (bod.lastname) {
                    foundedObj.lastname = bod.lastname;
                }

                if (bod.email) {
                    foundedObj.email = bod.email;
                }

                if (bod.artist) {
                    foundedObj.artist = bod.artist;
                }

                foundedObj.save();
            }
        }
    })

}

module.exports = {
    getAllUsers,
    addModelUser,
    deleteModelUser,
    updateModelUser
}