import { Server } from "socket.io";

import { env } from "./src/env";
import server from "./server";

const socket = new Server(server);

socket.on("connection", (socket) => {
  console.log(`Client ${socket.id} is connected`);

  socket.on("message", (event) => {
    console.log(event);
  });
});

server.listen(env.PORT, () =>
  console.log(`Server is running at port ${env.PORT} 🔥`)
);
