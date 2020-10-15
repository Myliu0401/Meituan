<template>
  <div class="productRight">
   <top :height="height"></top>
   <bottom></bottom>
  </div>
</template>



<script>
import top from './top.vue';
import bottom from './bottom.vue';
export default {
  data(){
    return{

    }
  },
  components:{
    top,
    bottom,
  },
  props:['height']
};
</script>



<style scoped>
.productRight{
  flex-grow: 1;
  box-sizing: border-box;
  margin-left: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>