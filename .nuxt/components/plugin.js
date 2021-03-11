import Vue from 'vue'

const components = {
  Logo: () => import('../..\\components\\Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  SearchComponent: () => import('../..\\components\\SearchComponent.vue' /* webpackChunkName: "components/search-component" */).then(c => c.default || c),
  Source: () => import('../..\\components\\Source.vue' /* webpackChunkName: "components/source" */).then(c => c.default || c),
  UpdateComponent: () => import('../..\\components\\UpdateComponent.vue' /* webpackChunkName: "components/update-component" */).then(c => c.default || c),
  VuetifyLogo: () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
