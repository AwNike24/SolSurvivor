import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
library.add(faPhone);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


createApp(App)
    .use(router)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
