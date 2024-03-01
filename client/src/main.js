import "./style.css";

import { createApp } from "vue";
import VueSocketIO from "vue-socket.io";

import App from "./App.vue";

createApp(App)
  .use(
    new VueSocketIO({
      debug: true,
      connection: "http://localhost:3333",
    })
  )
  .mount("#app");
