const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);

    res.write('Hello from NodeJS and Nodemon');
    res.end();

});

server.listen(3000, () => {
    console.log('Server is running...');
});