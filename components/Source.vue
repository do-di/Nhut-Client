<template>
  <p v-if="$fetchState.pending">Fetching mountains...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Nuxt Mountains {{hello}}</h1>
    <ul>
      <li v-for="mountain of mountains">{{ mountain.title }}</li>
    </ul>
    <button @click="$fetch">Refresh</button>
    <button @click="AddEvent">Thêm</button>
    <nuxt/>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex';
  export default {
    data() {
      return {
        mountains: [],
        hello:'HelloWorld'
      }
    },
    computed:{
      ...mapState({
        counter:state =>state.counter,
        mountainsState: state =>state.mountains
      })
    },
    methods:{
      ...mapActions([
        'increment',
        'changeMoutains'
      ]),
      AddEvent(){
        this.increment();
      }
      
    },
    async fetch() {
      var vm = this;

      this.mountains = await fetch(
        'https://api.nuxtjs.dev/mountains'
      ).then(res => res.json())
    
     this.$store.state.mountains = this.mountains;
     
    }
    
  }
</script>