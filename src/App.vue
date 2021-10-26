<template>
  <div id="app">
    <div :class="[$style.wrapper]">
      <header>
        <div :class="[$style.title]">My personal costs</div>
        <div :class="[$style.title_content]">
          <div :class="[$style.id_number]">#</div>
          <div :class="[$style.date]">Date</div>
          <div :class="[$style.category]">Category</div>
          <div :class="[$style.value]">Value</div>
        </div>
      </header>

      <main>
        <PaymentsDisplay :items="paymentsList" />
        <!-- <PaymentsDisplay :items="'any list data'" />-->
      </main>

      <!--
      <CounterButton />
      
      -->
      <div :class="[$style.form]">
        <div>
        <button @click="showKey = !showKey">Add New Cost</button>
        </div>
        <div :class="[$style.value]" >Total : 
         {{total}}

        </div>
        
      </div>
      <div v-if="showKey"><PaymentForm @addNewPayment="addNewPayment" /></div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
//import CounterButton from "@/components/counterButton.vue";
import PaymentsDisplay from "@/components/paymentDisplay.vue";
import PaymentForm from "@/components/addPaymenForm.vue";
//import AddPaymentForm from './components/AddPaymentForm
export default {
  //name: 'Home',
  components: {
    //CounterButton,
    PaymentsDisplay,
    PaymentForm,
  },
  data() {
    return {
      paymentsList: [],
      showKey: false,
      total:0,
    };
  },
  methods: {
    addNewPayment(data) {
      data.number = data.number + this.paymentsList.length;
      this.paymentsList = [...this.paymentsList, data];
      //this.total=data.value
      this.total+=Number(data.value)
    },
    fetchData() {
      return [
        {
          number: ++this.paymentsList.length,
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          number: ++this.paymentsList.length,
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          number: ++this.paymentsList.length,
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
      ];
    },
  },
 
  created() {
    this.paymentsList = this.fetchData();
    for (let item in this.paymentsList){
      this.total+=this.paymentsList[item].value
    }
    
  },
};
</script>
<style lang="scss" module>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.wrapper {
  background-color: aquamarine;
  border: 1px solid black;
  width: 700px;
}
.title {
  text-align: center;
  //border: 1px solid black;
  font-size: 28px;
}
.title_content {
  border: 1px solid black;
  display: flex;
  box-sizing: border-box;
  text-align: center;
}
.date {
  border: 1px solid black;
  width: 150px;
}
.id_number {
  border: 1px solid black;
  width: 50px;
}
.category {
  border: 1px solid black;
  width: 400px;
}
.value {
  border: 1px solid black;
  width: 100px;
  text-align: center;
}
.form {
  display: flex;
  justify-content: space-between;

  
}
</style>