/* EXPRESS */
const express = require("express");

const songsParam = require('./songs/route.js');


/* SERVER INIT */
var server = express();
server.use(express.json());
const port = server.listen(4100);


/* CONSOLE LOGS */
console.log(`Server working on port ${port}`);

/* SONGS  */

server.get("/songs", songsParam.getAllSongs)