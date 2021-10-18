import Home from "../views/Home";
import Landing from "../views/Landing";
import SurvivorPool from "../views/SurvivorPool";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/landing",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/survivor-pool/:mode?",
    name: "SurvivorPool",
    component: SurvivorPool,
  },
];
