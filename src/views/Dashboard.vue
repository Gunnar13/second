<template>
    <div>Page Dashboar
     <!-- <router-link to="/PaymentForm">Transporttttt</router-link>
      <a href="" >hhh /</a>
      <div @click="showKey = !showKey">  <router-link   to="/dashboard/Transport?value=50">
             </router-link>/add/payment/Transport?value=50  </div>-->

      <div>
        <a @click="showKey = true" href="/dashboard/Food?value=200">/add/payment/Food?value=200 //</a>
        </div>
      <div>
        <a @click="showKey = true" href="/dashboard/Transport?value=50">/add/payment/Transport?value=50 //</a>
         </div>    
      <div>
        <a @click="showKey = true" href="/dashboard/Entertainment?value=2000">/add/payment/Entertainment?value=2000 //</a>
      </div>
    
    <router-view />
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
        <PaymentsDisplay :items="currentElements" />

        <!-- <PaymentsDisplay :items="'any list data'" />-->
        <Pagination
          @paginate="changePage"
          :length="paymentsList.length"
          :cur="page"
          :n="count"
        />
      </main>

      <!--
      <CounterButton />
      
      -->
      <div :class="[$style.form]">
        <div>
          <button @click="showKey = !showKey">Add New Cost</button>
        </div>
        <div :class="[$style.value]">
          Total :
          {{ getFPV }}
        </div>
      </div>
      <div v-if="showKey">
        <PaymentForm @addNewPayment="addDataToPaymentsList" />
        
      
      </div>
    </div>
</div>
</template>
Food

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import PaymentsDisplay from "../components/paymentDisplay.vue";
import PaymentForm from "../components/addPaymenForm.vue";
import Pagination from "../components/Pagination.vue";


export default {
    name: "Dashboard",
    components: {
    PaymentsDisplay,
    PaymentForm,
    Pagination,
    
  },
    data() {
    //NotFound() {
    return {
      page: 1,
      count: 10,
      //paymentsList: [],
      showKey: true,
      //total: 0,
      pageName: "",
    };
  },

  computed: {
    ...mapGetters({
      paymentsList: "getPaymentsList",
    }),

    getFPV() {
      return this.$store.getters.getFullPaymentValue;
    },
    currentElements() {
      const { count, page } = this;
      return this.paymentsList.slice(
        count * (page - 1),
        count * (page - 1) + count
      );
    },
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    }
  },

  methods: {


    /*
    setPage() {
      //this.pageName = location.hash.slice(1);
      this.pageName = location.pathname.slice(1);
    },
*/


    changePage(p) {
      this.page = p;
    },
    /* ...mapMutations([
      'setPaymentsListData',
    ]),
    */

    ...mapMutations({
      updatePayments: "setPaymentsListData",
      addData: "addDataToPaymentsList",
    }),

    /*
    addNewPayment(data) {
      data.number = data.number + this.paymentsList.length;
      this.paymentsList = [...this.paymentsList, data];
      this.total+=Number(data.value)
    },
    */
    fetchData() {
      const items = [];
      for (let i = 1; i <= 100; i++) {
        items.push({
          number: i,
          date: "28.03.2020",
          category: "Food",
          value: i,
        });
      }
      return items;
      /* [
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
      ];*/
    },
    addDataToPaymentsList(item) {
      //this.paymentsList.push(item)
      const date = new Date();
      const data = { ...item, ...{ number: date.getMilliseconds() } };
      this.addData(data);
      //this.$router.push({ name: 'Dashboard' })
      //this.$router.push({ name: 'PaymentForm' })
      /*
      number : '',
      date: '',
      category: '',
      value: '',
      */
    },
  },
  mounted(){
      const page = this.$route.params.page
      if(page){this.page= Number(page)}
      //this.showKey=true;
//alert(this.showKey);alert(this.$route.category);
  },

}
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
  border: 1px solid black;
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