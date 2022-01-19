const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("hELLO U R ON HOME PAGE")
    }
    if(req.url === '/about'){
        res.end('you r on about page')
    }
    res.end(`<h1>OOPS</h1>
    <p>This page doesnt exist</p>
    <a href="/">back home</a>`)
    // res.write("Hello welcome to rc corporation")
    // res.end()
})

server.listen(5000)