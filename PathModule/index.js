

const path = require('path');

console.log("Diectory Name:", path.dirname(__filename));

console.log("File Name:", path.basename(__filename));

console.log("File Extension", path.extname(__filename));

const joinPath = path.join("/user", "documents", "node", "projects");
console.log("Joined Paths", joinPath);
