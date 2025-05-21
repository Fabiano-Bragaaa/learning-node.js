import http from "node:http";

//Req: Oq eu recebo.  criar um usuario (name, email, password)
//Response: Oq eu envio com oq recebo.

const users = [];

const server = http.createServer(async (request, response) => {
  const buffers = [];

  for await (const chunk of request) {
    buffers.push(chunk);
  }

  try {
    request.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    request.body = null;
  }

  const { method, url } = request;

  if (method === "GET" && url === "/users") {
    return response
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = request.body;

    users.push({
      id: 1,
      name,
      email,
    });
    return response.writeHead(201).end();
  }

  return response.writeHead(404).end("Not Found");
});

server.listen(3333);
