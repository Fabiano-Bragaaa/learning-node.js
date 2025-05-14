import http from "node:http";

//Req: Oq eu recebo.  criar um usuario (name, email, password)
//Response: Oq eu envio com oq recebo.

const server = http.createServer((request, response) => {
  const { method, url } = request;
  if (method === "GET" && url === "/users") {
    return response.end("listagem de usuarios");
  }

  if (method === "POST" && url === "/users") {
    return response.end("criação de usuario");
  }

  return response.end("Hello word");
});

server.listen(3333);
