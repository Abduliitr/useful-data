// Create a http server using node js

const http = require('http');

const {createFun, readFun, 
    updateFun, deleteFun} = require('./newModule.js');

const server = http.createServer(function(req, res){
    console.log(req.method, req.url);
    if(req.url == '/create' && req.method == 'POST'){
        res.write(JSON.stringify(createFun(10)))
    } else if (req.url == '/read' && req.method == 'GET'){
        res.write(JSON.stringify(readFun()))
    }else if (req.url == '/update'){
        res.write(JSON.stringify(updateFun(0, 100)))
    }else if (req.url == '/delete'){
        res.write(JSON.stringify(deleteFun(0)))
    }

    res.end();
})

server.listen(5000, function(){
    console.log("Server running on port 5000!")
});