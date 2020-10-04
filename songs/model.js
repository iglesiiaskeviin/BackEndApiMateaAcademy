const moongose = require("mongoose");

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

const songsSchema = new Schema({
    name: {type: String, required: true},
    album: String,
    duration: String,
    artist: String, 
}, {collection: "songs"});

const Song = moongose.model("songs", songsSchema);


async function getAllSongs(){
    return await Song.find({});
}

async function addModelSong(song){
    var newS = new Song(song);
    await newS.save();
}

async function deleteModelSong(id){
    await Song.findByIdAndRemove(id)
}

async function updateModelSong(id, bod){
    var myId = id;
    console.log(myId);
    return await Song.findOne({_id: myId}, function(error, foundedObj){
        if (error) {
            console.log(`Han error has occurred ${error}`);
        }else{
            if (!foundedObj) {
                console.log("This object dont't exist");
            } else{
                if (bod.name) {
                    foundedObj.name = bod.name;
                }

                if (bod.album) {
                    foundedObj.album = bod.album;
                }

                if (bod.duration) {
                    foundedObj.duration = bod.duration;
                }

                /* no terminado aun */
                if (bod.artist) {
                    foundedObj.artist = bod.artist;
                }
                

                foundedObj.save();
            }
        }
    })

}

module.exports = {
    getAllSongs,
    addModelSong,
    deleteModelSong,
    updateModelSong,
    Songs: Song
}