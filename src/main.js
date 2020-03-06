import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

//font-awesome stuff
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowAltCircleDown,
        faArrowAltCircleUp,
        faEraser,
        faTrash,
        faBars,
        faLevelDownAlt,
        faHandPointRight,
        faEdit
      } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store'

library.add(faArrowAltCircleDown, faArrowAltCircleUp, faEraser, 
            faEdit, faTrash, faBars, faLevelDownAlt, faHandPointRight);

Vue.component('font-awesome-icon', FontAwesomeIcon)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
