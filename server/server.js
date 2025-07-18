const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0"; // Ensures it listens on all network interfaces

import fastifyApp from "./src/app.js"

// some configurations setup
const server = fastifyApp({
  logger: {
    level: "info",
    printPretty: true,
    transport: {
      target: "pino-pretty",
    },
  },
});

const start = async () => {
  try {
    await server.listen({ port: PORT, host: HOST }); // Pass an object
    console.log(`🚀 SERVER RUNNING -  http://localhost:${PORT}`);
  } catch (error) {
    server.log.error(`SERVER CRASHED - http://localhost:${PORT}\n${error}`);
    process.exit(1);
  }
}

start();
