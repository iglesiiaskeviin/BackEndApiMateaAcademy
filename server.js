/* EXPRESS */
const express = require("express");

const songsParam = require('./songs/route.js');
const usersParam = require('./users/route.js')

/* SERVER INIT */
var server = express();
server.use(express.json());
server.listen(4100);


/* CONSOLE LOGS */
console.log(`Server working`);

/* SONGS  */

server.get("/songs", songsParam.getAllSongs)


/* USERS */

server.get('/users', usersParam.getAllUsers)


/* Adding song by post method */

server.post('/songs', songsParam.onPostSong)


/* Deleting song */

server.delete('/:songId', songsParam.onDeleteSong)