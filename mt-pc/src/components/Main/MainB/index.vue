<template>
    <div class="MainB">
        <MainB1></MainB1>
        <MainB2></MainB2>
        <MainB3></MainB3>
        <MainB4></MainB4>
    </div>
</template>



<script>
import MainB1 from './MainB-1.vue';
import MainB2 from './MainB-2.vue';
import MainB3 from './MainB-3.vue';
import MainB4 from './MainB-4.vue';
export default {
    data(){
        return{

        }
    },
    components:{
        MainB1,
        MainB2,
        MainB3,
        MainB4,
    }
}
</script>


<style scoped>
.MainB{
    width: 1200px;
    margin: 0 auto;
}


 @media screen and (min-width: 2000px) {
    .MainB {
      width: 90%;
    }
  }

  @media screen and (max-width: 1000px) {
    .MainB {
      width: 900px;
    }
  }
</style>