import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faFileExport, faShare, faUpload } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-regular-svg-icons'

library.add(faGithub,faShare,faFileExport,faUpload,faSave,faGoogleDrive)
const app = createApp(App);
app.use(router);
app.use(store);
app.component('fa-icon',FontAwesomeIcon);
app.mount('#app');
