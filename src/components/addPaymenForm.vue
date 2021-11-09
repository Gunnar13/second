<template>
  <div :class="[$style.wrapper]">
      <!--
    <input placeholder="id" v-model="number" />
input убрал потому как id (number) убрал потому как он сам добавляется в обьект
    -->
    <input placeholder="date" v-model="date" />
    <input placeholder="category" v-model="category" />
    <input placeholder="value" v-model="value" />
    <SelectCategory v-model="category" />
    <button v-if="!value || !category" @click="onSaveClick" disabled>Save!</button>
    <button v-else @click="onSaveClick">Save!</button>
<!--
    <button @click="getCurrentDate1">Save! {{ today1 }}</button>
    {{ getCurrentDate }}
    -->
  </div>
</template>


<script>
import { mapMutations } from 'vuex'
import SelectCategory from "@/components/SelectCategory.vue";
export default {
  name: "AddPaymetForm",
  components: {
    //CounterButton,
    SelectCategory,
    
  },
  data() {
    return {
      number : '',
      date: '',
      category: this.$route.params.pathMatch.slice(1),
      value: this.$route.query.value,
      
    };
  },
  /*created(){

    this.getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`
    }

  },*/
  methods: {
    
    onSaveClick() {

      /*
      
      this.value=this.$route.query.value;
      this.$route.query.value=this.$route.params.value;
      alert(this.$route.params.value);
      */

      const data = {
        number: ++this.number,
        //amount: +this.amount,
        date: this.date || this.getCurrentDate,
        category: this.category,
        //category: data.$route.params.category,
        value: Number(this.value)//Number(this.value) || Number(this.genVal)
        //type: this.type,
        
      };
      this.$emit("addNewPayment", data);
      
    },
  },
  computed: {
    
    ...mapMutations([
      'setPaymentsListData',
    ]),
/*
    genVal(){
      alert(this.$route.query.value)
      return Number(this.$route.query.value)
    },*/
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`
    }
  },
};
</script>
<style lang="scss" module>
.wrapper {
    
  background-color: cadetblue;
  border: 1px solid red;
  width: 150px;
}
.input{
    font-size: 18px;
}
</style>