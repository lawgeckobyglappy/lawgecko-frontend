import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'

//components
import TheButton from "@/components/utils/TheButton.vue"
import TheNav from "@/components/Layouts/TheNav.vue"
import TheFooter from "@/components/Layouts/TheFooter.vue"

const app = createApp(App)

app.use(store).use(router).mount('#app')
    .component("TheButton", TheButton)
    .component("TheNav", TheNav)
    .component("TheFooter", TheFooter)
