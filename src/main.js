import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faGoogleDrive } from '@fortawesome/free-brands-svg-icons';
import { faFileExport, faFilePdf, faPrint, faShare, faUpload } from '@fortawesome/free-solid-svg-icons'
import { faSave } from '@fortawesome/free-regular-svg-icons'
import ImageFileInput from "./components/ImageFileInput.vue";
import ImagePreview from "./components/ImagePreview.vue";
import InputTextField from "./components/InputTextField.vue";
import InputTextArea from "./components/InputTextArea.vue";
library.add(faGithub,faShare,faFileExport,faUpload,faSave,faGoogleDrive,faPrint,faFilePdf)
const app = createApp(App);
app.use(router);
app.use(store);
app.component('fa-icon',FontAwesomeIcon);
app.component('image-input',ImageFileInput)
app.component('image-preview',ImagePreview)
app.component('input-text',InputTextField)
app.component('input-textarea',InputTextArea)

app.mount('#app');
