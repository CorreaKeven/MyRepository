const os = require('os');
const { arch, platform, totalmem, freemem, type, networkInterfaces, cpus} = os;



setInterval(()=> {

    const tRam = totalmem()/1024/1024;
    const fRam = freemem()/1024/1024;
    const usage = (fRam/tRam)*100;

    const stats ={
        OS : platform(),
        Arch : arch(),
        TotalRAM : `${parseInt(tRam)} MB`,
        FreeRAM : `${parseInt(fRam)} MB`,
        Type : type(),
        Usage : `${usage.toFixed(2)}%`,
        }
        console.clear();
        console.table(stats);
        console.log(networkInterfaces());


exports.stats = stats;

},1000);

//console.log(cpus());

