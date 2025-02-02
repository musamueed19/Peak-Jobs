const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || "0.0.0.0"; // Ensures it listens on all network interfaces

const server = require("./src/app")({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

async function start() {
  try {
    await server.listen({ port: PORT, host: HOST }); // Pass an object
    console.log(
      `🚀 Server is running at http://localhost:${PORT}`
    );
  } catch (error) {
    server.log.error(`Failed to run server at PORT ${PORT}\n${error}`);
    process.exit(1);
  }
}

start();
