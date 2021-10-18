// import Home from "../views/Home";
import SurvivorPool from "../views/SurvivorPool";
import Landing from "../views/Landing";

export default [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/survivor-pool/:mode?",
    name: "SurvivorPool",
    component: SurvivorPool,
  },
];
