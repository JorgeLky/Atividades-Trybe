const net = require("net");
const server = net.createServer((socket) => {
  socket.write("Olá cliente");
  socket.on("data", (data) => {
    console.log(data.toString());
  });
});
server.listen(3000, () => console.log("Servidor TCP rolando"));