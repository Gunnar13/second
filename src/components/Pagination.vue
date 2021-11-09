<template>
  <div class="pagination-wrapper">
    <div @click="onclick(cur-1)">-</div>
    <div
      class="page"
      :class="{ active: cur === i }"
      v-for="i in amount"
      :key="i"
      @click="onclick(i)" >
      {{ i }}
    </div>
    <div @click="onclick(cur+1)">+</div>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  data() {
    return {
        //amount:[],
    };
  },
  methods: {
      onclick(p){
          if(p<1 || p>this.amount){
              return
          }
          this.$emit('paginate', p);
      }
  },
  computed: {
      amount(){
          return Math.ceil(this.length/this.n)
      }
  },
};
</script>

<style scoped>
.pagination-wrapper{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
.active{
    background-color: blue;
}
.page{
    padding: 10px;
}
</style>