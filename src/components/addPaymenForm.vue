<template>
  <div :class="[$style.wrapper]">
      <!--
    <input placeholder="id" v-model="number" />
input убрал потому как id (number) убрал потому как он сам добавляется в обьект
    -->
    <input placeholder="date" v-model="date" />
    <input placeholder="category" v-model="category" />
    <input placeholder="value" v-model="value" />
    
    <button @click="onSaveClick">Save!</button>
<!--
    <button @click="getCurrentDate1">Save! {{ today1 }}</button>
    {{ getCurrentDate }}
    -->
  </div>
</template>


<script>
export default {
  name: "AddPaymetForm",
  data() {
    return {
      number : '',
      date: '',
      category: '',
      value: '',
      today1: "rrr",
    };
  },
  methods: {
    getCurrentDate1() {
      this.today1 = new Date();
      //const d = today.getDate()
      //const m = today.getMonth() + 1
      //const y = today.getFullYear()
      return this.today1;
    },
    onSaveClick() {
      const data = {
        number: 1,//++this.number,
        
        date: this.date || this.getCurrentDate,
        category: this.category,
        value: this.value
      };
      this.$emit("addNewPayment", data);
    },
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
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