import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

//components
import TheButton from "@/components/buttons/TheButton.vue";
import NavBar from "@/components/layouts/NavBar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import i18n from "./i18n";

const app = createApp(App);
app.use(i18n);



app.use(store);
app.use(router);
app.mount("#app");
app.component("TheButton", TheButton);
app.component("NavBar", NavBar);
app.component("TheFooter", TheFooter);
