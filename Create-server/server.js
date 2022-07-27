const http = require('http');
const port =3000;
const host = 'http://localhost';
const stats = require('./pcRamUsage.js');


http.createServer((req, res) => {
    let url = req.url;

    if (url === "/stats") {

        res.end(JSON.stringify(stats,null,3));
    }else {
        res.end("<h1>Welcome</h1>");
    }
})
.listen(port,()=> console.log(`Server is runnig ${host}:${port}`));
