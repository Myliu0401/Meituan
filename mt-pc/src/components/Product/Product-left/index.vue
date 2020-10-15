<template>
    <div class="productLeft">
        <top></top>
        <shubect></shubect>
    </div>
</template>

<script>
import top from './top.vue';
import shubect from './subject.vue';
export default {
    components:{
       top,
       shubect,
    },
}
</script>



<style scoped>
.productLeft{
    width: 950px;
    padding-bottom: 10px;
    box-sizing: border-box;
    margin-top: 10px;
}

@media screen and (min-width: 2000px) {
      .productLeft {
        width: 1200px;
      }
    }
  
    @media screen and (max-width: 1000px) {
      .productLeft {
        width: 650px;
      }
    }
</style>