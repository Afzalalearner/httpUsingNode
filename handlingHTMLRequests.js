const http = require('http');
const fs = require('fs')

const homepage = fs.readFileSync('index.html')
const contactus = fs.readFileSync('contactus.html')
const aboutus = fs.readFileSync('aboutus.html')
const server = http.createServer((req, res) => {
    console.log(req.url)

    if(req.url==='/'){
res.end(homepage);
}else if(req.url==='/aboutus'){
    res.end(aboutus)
}else if(req.url==='/contactus'){
    res.end(contactus)
}else{
    res.writeHead(404)
    res.end('Page Not Found')
}

})

server.listen(8000, () => {
    console.log('server listening on port 8000...')
})