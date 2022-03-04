import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18n from "./i18n";
import FontAwesomeIcon from "./icons";

export const app = createApp(App);

// Icons
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(i18n).use(store).use(router).mount("#app");
