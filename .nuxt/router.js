import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36bed803 = () => interopDefault(import('..\\pages\\Component0.vue' /* webpackChunkName: "pages/Component0" */))
const _1a8b2680 = () => interopDefault(import('..\\pages\\EditItemComponent.vue' /* webpackChunkName: "pages/EditItemComponent" */))
const _dc15190c = () => interopDefault(import('..\\pages\\inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _436afa7e = () => interopDefault(import('..\\pages\\ProductComponent.vue' /* webpackChunkName: "pages/ProductComponent" */))
const _2f6f8f72 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Component0",
    component: _36bed803,
    name: "Component0"
  }, {
    path: "/EditItemComponent",
    component: _1a8b2680,
    name: "EditItemComponent"
  }, {
    path: "/inspire",
    component: _dc15190c,
    name: "inspire"
  }, {
    path: "/ProductComponent",
    component: _436afa7e,
    name: "ProductComponent"
  }, {
    path: "/",
    component: _2f6f8f72,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
