const http=require('http');

const server=http.createServer((req,res)=>{
console.log(req.url)

if(req.url==='/'){
res.end('Welcome to Home Page')
}

if(req.url==='/about'){
for(i=0;i<=300;i++){
        for (j=0;j<=300;j++){
            console.log(i+j)
        }
    }
    res.end('Welcome to about page')
}

if(req.url==='/contact'){
    res.end('Welcome to Contact page')
}

})

server.listen(3000,()=>{
    console.log('Server Listening on port 3000....')
})
