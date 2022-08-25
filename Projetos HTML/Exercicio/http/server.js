const http = require ('http')
const fs = require ('fs')  //
const path = require('path')

http.createServer((req,res) => {
if(req.url=== '/'){
fs.readFile(
        path.join(__dirname,'../../../Projetos HTML/Exercicio/index.html'),
        (err,content) => {
             if(err)throw err

             res.end(content)
            }            
        )
}
//return res.end('<h1>HomePage</h1>') //podemos carregar um arquivo html

//if(req.url === '/contato')
//return res.end('<h1>Contato</h1>')

}) .listen(2000,() => console.log('Server is running'))