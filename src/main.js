import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);
const emitter = mitt();
const app = createApp(App).component('fa', FontAwesomeIcon);
app.config.globalProperties.emitter = emitter;
app.mount('#app');