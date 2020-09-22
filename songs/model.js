const moongose = require("mongoose");

////////////////
/* DB CONNECT */
////////////////

const db = 'mongodb+srv://kevin:123asd@cluster0.vahxu.azure.mongodb.net/proyectoModulo3?retryWrites=true&w=majority'
mongoose.connect(db,
{ 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log("An error has ocurred:" + err));

const Schema = moongose.Schema;

const songsSchema = new Schema({
    name: {type: String, required: true},
    album: String,
    duration: Number,
    artist: Object,
}, {collection: "songs"});

const Song = moongose.model("songs", songsSchema);

///////////////
/* FUNCTIONS */
///////////////

async function getAllSongs(){
    return await Song.find({});
}

module.exports = {
    getAllSongs,
}