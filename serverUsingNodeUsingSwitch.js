const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req.url)
    switch(req.url){   //writing break is very important

      case'/': 
       res.write('Han Welcome to Home Page....Kia hona bolo')
          res.end();
        break;
   
    
    case '/fazl':
        res.write('You are welcome to my page!Fazl')
        res.end()
        break;
    
    case '/zia':
        res.write('You are welcome to my page!Zia')
        res.end()
        break;
     
       case '/nawal':
            res.write('You are welcome to my page!Nawal' )
            res.end()
            break
     
            case '/rabah':
                res.write('You are welcome to my page!Rabah')
                res.end()
                break;
     
                case '/musfirah':
                    res.write('You are welcome to my page!Musfirah')
                    res.end()
                    break;
     
                  default:
                            res.writeHead(400)
                            res.end('Page Not Found')
                            break;
                }                                        
                    
})
server.listen(4000,()=>{
    console.log('Server Listening on port 5000...')
})