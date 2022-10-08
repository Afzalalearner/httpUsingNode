const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url)

    if(req.url==='/'){
        res.write('Han Welcome to Home Page')
        res.end();
    }
    
    else if(req.url==='/fazl'){
        res.write('You are welcome to my page!Fazl')
        res.end()}
    
        else if(req.url==='/zia'){
        res.write('ASSALAMUALIKUM Hafiz Zia')
        res.end()}
     
        else if(req.url==='/nawal'){
            res.write('You are welcome to my page!Nawal' )
            res.end()}
     
            else if(req.url==='/rabah'){
                res.write('You are welcome to my page!Rabah')
                res.end()}
     
                else  if(req.url==='/musfirah'){
                    res.write('You are welcome to my page!Musfirah')
                    res.end()}
     
                    else{
                            res.writeHead(400)
                            res.end('Page Not Found')
                  }
                                            
                    
})
server.listen(5000,()=>{
    console.log('Server Listening on port 5000...')
})