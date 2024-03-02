import "./style.css";

import * as VueRouter from "vue-router";

import { createApp } from "vue";
import { routes } from "./routes";

import App from "./App.vue";

const history = VueRouter.createMemoryHistory();

const router = VueRouter.createRouter({
  routes,
  history,
});

createApp(App).use(router).mount("#app");
