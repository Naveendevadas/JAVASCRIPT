const http = require('http')
const url = require('url')
const PORT = 3000;
const link = require('fs')

const server = http.createServer((req,res) =>{
    const req_url = req.url;
    console.log("req_url",req_url);

    let parsed_url = url.parse(req_url);
    console.log("parsed_url :", parsed_url);

    if(parsed_url.pathname === '/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.end(link.readFileSync('../client/index.html'))
    }
    else if(parsed_url.pathname === '/json'){
        res.writeHead(200,{'content-type':'text/json'})
        res.end(link.readFileSync('./data.json'))
    }
    



})
server.listen(PORT, () => {
    console.log(`server running http://localhost:${PORT}/`);

});
