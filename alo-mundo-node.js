
// Codigo mínimo de um servidor Web baseado em Node

import { createServer } from 'http';

createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Ola, cliente HTTP!');
}).listen(8080);

console.log('Servidor rodando na porta 8080');
