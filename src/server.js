import http from "node:http";

//Req: Oq eu recebo.  criar um usuario (name, email, password)
//Response: Oq eu envio com oq recebo.

const server = http.createServer((request, response) => {
  return response.end("Hello word");
});

server.listen(3333);
