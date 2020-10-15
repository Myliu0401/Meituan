<template>
  <div class="GeneralFramework">
    <header>
      <Header></Header>
    </header>
    <main>
     <!-- <Main></Main> -->
     <router-view></router-view>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
  </div>
</template>



<script>
import Header from "./Header/index.vue";
import Main from "./Main/index.vue";
import Footer from "./Footer/index.vue";
export default {
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>


<style scoped>
.GeneralFramework{
  background-color: #f8f8f8;
}
</style>