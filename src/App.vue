<template>
  <div id="app">
    <div>
      <nav>
        <a href="dashboard">Dashboard</a> / <a href="about">About</a> /
        <a href="NotFound">dev/null</a> /
      </nav>
      <dashboard v-if="pageName === 'dashboard'" />
      <About v-if="pageName === 'about'" />
      <not-found v-if="pageName === 'NotFound'" />
      <add-paymen-form v-if="pageName === 'PaymentForm'" />
    </div>
    <router-link to="/dashboard">dashboard</router-link> /
    <router-link to="/about">about</router-link> /
    <router-link to="/notfound">notfound</router-link> /
    <router-link to="/dashboard/5/">5</router-link> /
    <!--
      <router-link to="/PaymentForm">Transportt //</router-link>
    <router-link to="/dashboard/?showKey=true/">Transportt</router-link>
-->
    
    <router-view />
  </div>
</template>
<script>
// @ is an alias to /src
//resolve(['Food', 'Transport', 'Education', 'Entertainment'])
import Dashboard from "@/views/Dashboard.vue";
import About from "@/views/About.vue";
import NotFound from "./views/NotFound.vue";

//import AddPaymenForm from './components/addPaymenForm.vue';

export default {
  name: 'App',
  components: {
    //CounterButton,
    Dashboard,
    About,
    NotFound,
    
  },
  data() {
    //NotFound() {
    return {
      page: 1,
      count: 10,
      pageName: ""
    };
  },


  created() {
    //this.$router.push({ name: 'Dashboard' })
    //this.setPaymentsListData(this.fetchData())

    // this.updatePayments(this.fetchData());
    //this.setPaymentsListData(this.fetchData())

    //this.$store.commit('setPaymentsListData', this.fetchData());
    this.$store.dispatch("fetchData");
    
  },

  /*
  mounted() {
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        history.pushState({}, '', link.href)
        //this.$root.$emit('router-go')
        this.setPage()
      });
    });

    this.setPage();
    window.addEventListener("hashchange", () => {
      this.setPage();
    });
    this.setPage()
    window.addEventListener('popstate', this.setPage)
    //popstate позволяет переходить на предыдущую страницу!!!
  },
  */


};
</script>
<style lang="scss" module>

</style>