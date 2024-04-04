const server = Bun.serve({
    port: 3000,
    fetch(request) {
      return new Response("Hello world");
    },
  });
  
  console.log(`Listening on localhost:${server.port}`);