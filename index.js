const http = require('http')
const url = require('url')


const server = http.createServer((req,res)=>{
    const reqPath = req.url
    if(reqPath === '/login'){
        res.end("send him to dashboard")
    }
    else if (reqPath === '/name'){
        res.end("Hello Sachin")
    }
    else if(reqPath === '/Sachin'){
        res.end("welcome to my world sachin")
    }
    else{
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-header' : 'my header'
        })
        res.end( "<h1>Page not found</h1>")
    }
    
})

server.listen(8000, '127.0.0.1', () => {
    console.log("listening on port 8000")
})