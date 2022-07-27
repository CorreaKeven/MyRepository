const EventEmitter = require('events')
const fs = require('fs') // modulo do node    ----    fs = file system = 
const path = require ('path') // modulo do node  ---- identifica a maquina /sistema operacional e localiza o melhor caminho do arquivo

const emitter = new EventEmitter() 

emitter.on('log',(message) => {
    //console.log(message)
    fs.appendFile(path.join(__dirname,'log.txt'), message, err =>  {
                if (err) throw err
    })
})
function log(message) {
emitter.emit('log',message)

}

module.exports = log;