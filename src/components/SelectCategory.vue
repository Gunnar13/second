<template>
 <div :class="[$style.wrapper]">
   <select :value="value" @change="onChange($event)">
     <option v-for="(option, idx) in getCategoryList" :key="idx">
       {{ option }}
     </option>
   </select>
 </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
 
export default {
    name: 'SelectCategory',
    props: {value: String},
 data() {
     return{
   selected: ''
     }
 },
 computed: {
   ...mapGetters([
     'getCategoryList'
   ])
 },
 methods: {
   ...mapActions([
     'loadCategories'
   ]),
   onChange(event){
       this.$emit('input', event.target.value)
   }
 },
 mounted () {
   if (!this.getCategoryList.length) {
     this.loadCategories()
   }
 }
}
</script>
<style lang="scss" module>
.wrapper {
  background-color: aquamarine;
  border: 1px solid black;
  width: 700px;
}
</style>