<script>
import VuetifyLogo from '../components/VuetifyLogo.vue'
import Source from 'd:/PG/Nuxt.js/nuxt-first-app/components/Source.vue'

export default {
  components: {
    VuetifyLogo, Source }
}
</script>
<template>
<div>
<VuetifyLogo/>
  <Source/>
</div>

</template>

<script>
export default {
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>