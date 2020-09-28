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


module.exports = {
    getAllUsers
}