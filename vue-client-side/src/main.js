import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

console.log(import.meta.env.VITE_API_ENDPOINT);
console.log('test');
createApp(App).mount('#app')
