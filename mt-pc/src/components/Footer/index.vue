<template>
    <div class="footer">
       <footerA></footerA>
       <footerB></footerB>
    </div>
</template>

<script>
import footerA from './footerA-1.vue';
import footerB from './footerB-1.vue';
export default {
         data(){
             return{

             };
         },
         components:{
            footerA,
            footerB,
         }
}
</script>

<style scoped>
.footer{
    width: 1200px;
    margin: 0 auto;
    margin-top: 40px;
    background-color: #f8f8f8;
}

 @media screen and (min-width: 2000px) {
    .footer {
      width: 90%;
    }
  }

  @media screen and (max-width: 1000px) {
    .footer {
      width: 900px;
    }
  }
</style>