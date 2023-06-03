import { createApp } from 'vue'

import './style.scss'
import App from './App.vue'
import ScrollAnimation from "@/directives/scroll-animation.js";

createApp(App).directive('scrollanimation', ScrollAnimation).mount('#app')
