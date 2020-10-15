<template>
    <div class="Header">
        <headNo1></headNo1>
        <headNo2></headNo2>
    </div>
</template>

<script>
import headNo1 from './headNo1.vue';
import headNo2 from './headNo2.vue';
export default {
    components:{
        headNo1,
        headNo2,
    }
}
</script>
<style scoped>
.Header{
    box-shadow: 0 2px 27px 0 rgba(0, 0, 0, 0.1);
}
</style>