import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/assets/css/common.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia'

import 'bootstrap/dist/js/bootstrap.js';

//createApp(App).use(router).use(createPinia()).mount('#app');

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
