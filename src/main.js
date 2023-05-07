import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faFileExport, faFilePdf, faFileWord, faMultiply, faPlus, faPrint, faShare, faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-regular-svg-icons'
import ImageFileInput from './components/ImageFileInput.vue'
import ImagePreview from './components/ImagePreview.vue'
import InputTextField from './components/InputTextField.vue'
import InputTextArea from './components/InputTextArea.vue'
import DataRow from './components/DataRow.vue'
import TableRow from './components/TableRow.vue'
import VueGtagPlugin from 'vue-gtag'
import { createHead } from '@vueuse/head'

library.add(faGithub, faShare, faFileExport, faUpload, faSave, faGoogleDrive, faPrint, faFilePdf, faFileWord, faTrash, faPlus, faMultiply)

const gtagOpts = {
    config: {
        id: 'G-B6XTCBGQRB',
        params: {
            anonymize_ip: true,
        },
    },
}
const head = createHead()
const app = createApp(App)
app.use(router)
app.use(store)
app.use(VueGtagPlugin,gtagOpts);

app.use(head)
app.component('fa-icon', FontAwesomeIcon)
app.component('image-input', ImageFileInput)
app.component('image-preview', ImagePreview)
app.component('input-text', InputTextField)
app.component('input-textarea', InputTextArea)
app.component('data-row', DataRow)
app.component('table-row', TableRow)

app.mount('#app')
