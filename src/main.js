import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css';
import { createHead } from '@unhead/vue';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faFileExport, faFilePdf, faFileWord, faMoon, faMultiply, faPlus, faPrint, faShare, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-regular-svg-icons'
import VueGtagPlugin from 'vue-gtag'

import { registerSW } from 'virtual:pwa-register'


library.add(faGithub, faShare, faMoon, faFileExport, faUpload, faSave, faGoogleDrive, faPrint, faFilePdf, faFileWord, faTrash, faPlus, faMultiply)

const gtagOpts = {
    config: {
        id: 'G-B6XTCBGQRB',
        params: {
            anonymize_ip: true,
        },
    },
}
const app = createApp(App)
app.use(router)
app.use(createHead());
app.use(store)

app.use(VueGtagPlugin,gtagOpts);


app.component('fa-icon', FontAwesomeIcon)


app.mount('#app')

registerSW({
    onOfflineReady() {},
  })