import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/views/TheLanding.vue'

const routes: Array<any> = [
  {
    path: '/', 
    name: 'landing', 
    component: Landing
  }, {
    path: '/themen/', 
    name: 'topics',
    component: ()=>import("@/views/TheTopics.vue"),
  }, {
    path: '/themen/:reference', 
    name: 'topics.show', 
    component: ()=>import("@/views/TopicShow.vue")
  }, { 
    path: '/karte', 
    name: 'map', 
    component: ()=>import("@/views/TheMap.vue") 
  }, { 
    path: '/doku', 
    name: 'documentation', 
    component: ()=>import("@/views/TheDocumentation.vue")
  },
]

const router: any = createRouter({
    history: createWebHistory(),
    routes
})
export default router