import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'virtual:windi.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import FightScene from './views/fightScene/index.vue'

const myRoutes = [
    {
        path: '/battle', component: FightScene
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: myRoutes
})

createApp(App).use(router).mount('#app')
