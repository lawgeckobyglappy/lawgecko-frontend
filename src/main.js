import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

//components
import TheButton from "@/components/buttons/TheButton.vue";
import NavBar from "@/components/Layouts/NavBar.vue"
import TheFooter from "@/components/Layouts/TheFooter.vue";
import i18n from "./i18n";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

//font awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//font icon styles
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

//add free icon styles to SVG core
library.add(fas,far,fab)

const app = createApp(App);
app.use(i18n);



app.use(store);
app.use(router);
app.mount("#app");
app.component("TheButton", TheButton);
app.component("NavBar", NavBar);
app.component("TheFooter", TheFooter);
app.component("fa-icon", FontAwesomeIcon)
