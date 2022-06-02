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


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
