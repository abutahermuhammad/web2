const http = require("http");
const fs = require('fs')

const server = http.createServer()


server.on('request', (req, res) => {
    if (req.url === "/read-file" && req.method === "GET");

    const readableStream = fs.createReadStream('./stream.txt');

    readableStream.on('data', (chunk) => {
        res.write(chunk);
    });

    readableStream.on('end', () => {
        res.end("read complete");
    });



    // console.log(req.method);
    // console.log(req.url);
    // res.end("Hello from world!");
});

server.listen(5000, () => {
    console.log("Server is listening on port 5000");
})