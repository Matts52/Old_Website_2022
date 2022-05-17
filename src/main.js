import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";

createApp(App).use(VueGtag, {
  config: { id: "UA-228976612-1" }
}).mount("#app");



//createApp(App).mount('#app')
