export { default as Logo } from '../../components/Logo.vue'
export { default as SearchComponent } from '../../components/SearchComponent.vue'
export { default as Source } from '../../components/Source.vue'
export { default as UpdateComponent } from '../../components/UpdateComponent.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazySearchComponent = import('../../components/SearchComponent.vue' /* webpackChunkName: "components/search-component" */).then(c => c.default || c)
export const LazySource = import('../../components/Source.vue' /* webpackChunkName: "components/source" */).then(c => c.default || c)
export const LazyUpdateComponent = import('../../components/UpdateComponent.vue' /* webpackChunkName: "components/update-component" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
