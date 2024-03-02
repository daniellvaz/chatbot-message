import Home from "../pages/Home.vue";
import Room from "../pages/Room.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:roomId",
    component: Room,
  },
];
