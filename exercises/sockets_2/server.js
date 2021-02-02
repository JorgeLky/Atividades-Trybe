const net = require('net');

const server = net.createServer((connection) => {
  console.log('usuário conectado!');

  connection.on('end', () => {
    console.log('usuário desconectado!');
  });

  server.getConnections((err, count) => {
    console.log(count);
  })

  connection.write('Aqui é o servidor, tu ta chatão ein, me deixa dormir!');
  connection.pipe(connection);
})

server.listen(8080, () => {
  console.log('estamos online!')
})