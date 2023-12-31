import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import vue3GoogleLogin from 'vue3-google-login'
import { Row, Column, Hidden } from "vue-grid-responsive";
import 'intersection-observer';


// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  components,
  directives,
});

//components
import TheButton from "@/components/buttons/TheButton.vue";
import SideBar from "@/components/layouts/SideBar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
import i18n from "./i18n";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//font icon styles
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import "./assets/tailwind.css";

//add free icon styles to SVG core
library.add(fas, far, fab);

const app = createApp(App);
app.use(i18n);

app.use(store);
app.use(router);
app.use(vuetify);
AOS.init()
app.use(vue3GoogleLogin, { clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID });
app.mount("#app");
app.component("TheButton", TheButton);
app.component("fa-icon", FontAwesomeIcon);
app.component("SideBar", SideBar);
app.component("TheFooter", TheFooter);


//grid responsive
app.component("TheRow", Row);
app.component("TheColumn", Column);
app.component("TheHidden", Hidden);
