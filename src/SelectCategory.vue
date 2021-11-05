<template>
 <div :class="[$style.wrapper]">
   <select v-model="selected">
     <option v-for="option in getCategoryList" :key="option">
       {{ option }}
     </option>
   </select>
 </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
 
export default {
    name: 'SelectCategory',
 data() {
     return{
   selected: '',
     }
 },
 computed: {
   ...mapGetters([
     'getCategoryList'
   ])
 },
 actions: {
   ...mapActions([
     'loadCategories'
   ])
 },
 mounted () {
   if (!this.getCategoryList.length) {
     this.loadCategories()
   }
 }
}
</script>
