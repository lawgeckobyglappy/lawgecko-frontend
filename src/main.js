import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

//components
import TheButton from "@/components/buttons/TheButton.vue"
import NavBar from "@/components/layouts/NavBar.vue"
import TheFooter from "@/components/layouts/TheFooter.vue"

const app = createApp(App)

app
  .use(store)
  .use(router)
  .mount("#app")
  .component("TheButton", TheButton)
  .component("NavBar", NavBar)
  .component("TheFooter", TheFooter);
