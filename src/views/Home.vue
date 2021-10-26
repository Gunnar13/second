<template>
  <div class="home">
    <button @click="onClick">Clicked {{ counter }} times!</button>
<counterButton />
  </div>
</template>

<script>
// @ is an alias to /src
import counterButton from '@/components/counterButton.vue'

export default {
  name: 'Home',
  components: {
    counterButton
  },
  
  data () {
      return {
        counter: 0,
      }
    },
    methods: {
      onClick () {
        this.counter++
       }
    }
}
</script>
