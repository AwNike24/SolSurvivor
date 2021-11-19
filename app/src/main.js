import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faAngleUp,
  faAngleDown,
  faChevronDown,
  faSearch,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faPhone,
  faAngleUp,
  faAngleDown,
  faChevronDown,
  faSearch,
  faCheckCircle
);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// mitt
import mitt from "mitt";
const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.$emitter = emitter;

app
  .use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
