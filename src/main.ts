import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import './style'

const app = createApp(App)

setupRouter(app)

app.mount('#app')
