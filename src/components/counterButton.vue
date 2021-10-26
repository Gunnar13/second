<template>
<div>
 <!--<button>Hover!</button>
-->
  <button @click="onClick">Clicked {{ counter }} times!</button>
  </div>
</template>
 
<script>
  export default {
    
  name: 'CounterButton',
  

    data () {
      return {
        counter: 0,
      }
    },
    methods: {
      onClick () {
        this.counter++
       },
       onMouseOver () {
        console.log('Hovered on button!')
      }


    },
    beforeMount () {
        console.log('Component root element: ', this.$el)
    },
    mounted () {
      const btn = this.$el.querySelector('button')
      if (btn) {
        btn.addEventListener('mouseover', this.onMouseOver)
      }
    },
    beforeDestroy () {
  const btn = this.$el.querySelector('button')
  if (btn) {
    btn.removeEventListener('onmouseover', this.onHover)
  }
},



  }
</script>
