const os = require ('os') //require module exports COMMON JS  - EXPORTA MODULOS DE DENTRO DO NODE
//const { parse } = require('path')

const log = require ('./logger') // ./ -> definicao pasta local

setInterval(() => {       //setIntervla função global.

    const {freemem , totalmem } = os
    const total = parseInt(totalmem()/1024/1024)
    const mem = parseInt(freemem()/1024/1024)
    const percents = parseInt((mem / total)*100)
    
    console.log(mem,total,percents)
    
   const stats = {
        free : `${mem}MB`,
        total : `${total}MB`,
        usage : `${percents}%`,
    }
       
    console.clear()
    console.log("     ===PC STATS ===")
    console.table(stats);
    

    log(`${JSON.stringify(stats)}\n`) // stringify  - converte objeto para string(json)
    console.log('       Rodando')


},1000)

