import Home from "../views/Home";
import SurvivorPool from "../views/SurvivorPool";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/survivor-pool/:mode?",
    name: "SurvivorPool",
    component: SurvivorPool,
  },
];
