import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import './plugins/element'

Vue.config.productionTip = false

export async function createApp({
  context = null,
  beforeApp = (() => {}) as any,
  afterApp = (() => {}) as any
} = {}) {
  const router = createRouter()
  const store = createStore()

  await beforeApp({
    router,
    store
  })

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  const result = {
    app,
    router,
    store
  }

  await afterApp(result)

  return result
}
