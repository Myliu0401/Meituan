<template>
    <div class="main">
        <MainA></MainA>
        <MainB></MainB>
    </div>
</template>

<script>
import MainA from './MainA/index.vue';
import MainB from './MainB/index.vue';
export default {
    data(){
        return{

        }
    },
    components:{
       MainA,
       MainB,
    },
}
</script>



<style scoped>
.main{
    width: 1200px;
    margin: 0 auto;
}
 @media screen and (max-width: 1000px) {
    .main {
      width: 900px;
    }
  }
  
  @media screen and (min-width: 2000px) {
    .main {
      width: 90%;
    }
  }
</style>