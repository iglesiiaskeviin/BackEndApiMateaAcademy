/* EXPRESS */
const express = require("express");


/* SERVER INIT */
var server = express();
server.use(express.json());
const port = server.listen(4100);


/* CONSOLE LOGS */
console.log(`Server working on port ${port}`);

