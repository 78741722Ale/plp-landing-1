import Vue from 'vue'
import App from './App.vue'
/* Import di Bootstrap */
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const bootstrap = require('bootstrap')
Vue.use(bootstrap)
/* Import del Font da FontSource */
import "@fontsource/ibm-plex-sans-thai";
import "@fontsource/ibm-plex-sans-thai/200.css"
import "@fontsource/ibm-plex-sans-thai/400.css"
import "@fontsource/ibm-plex-sans-thai/500.css"
import "@fontsource/ibm-plex-sans-thai/700.css"
/* Import di Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* Add icons to the library */
library.add(faCirclePlay, faTwitter)
/* Add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
