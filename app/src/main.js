import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(router).use(store).mount("#app");

// THIS IS TO ENABLE VUE DEVTOOLS
window.postMessage(
  {
    devtoolsEnabled: true,
    vueDetected: true,
  },
  "*"
);
