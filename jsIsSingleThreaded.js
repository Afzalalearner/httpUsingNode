const http=require('http');

const server=http.createServer((req,res)=>{
console.log(req.url)

if(req.url==='/'){
res.end('Welcome to Home Page')
}

if(req.url==='/about'){
setTimeout(()=>{for(i=0;i<=500;i++){
        for (j=0;j<=500;j++){
            console.log(i+j)
        }
    }},1000)
    res.end('Welcome to about page')
}

if(req.url==='/contact'){
    res.end('Welcome to Contact page')
}

})

server.listen(3000,()=>{
    console.log('Server Listening on port 3000....')
})
