import "./src/ws/message";
import { env } from "./src/env";
import server from "./server";

server.listen(env.PORT, () =>
  console.log(`Server is running at port ${env.PORT} 🔥`)
);
