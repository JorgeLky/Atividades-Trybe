const net = require('net');

const client = net.connect({ port: 8080 }, () => {
  console.log('Cliente connectado ao servidor!');
});

client.on('end', () => {
  console.log('Desconectado do servidor!');
})