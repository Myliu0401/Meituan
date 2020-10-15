<template>
  <div class="mainA">
    <mainNo1></mainNo1>
    <mainNo2 :mywidth="waichengWidth"></mainNo2>
    <mainNo3 v-if="isNo3"></mainNo3>
    <mainNo4></mainNo4>
  </div>
</template>

<script>
import mainNo1 from "./mainA-1.vue";
import mainNo2 from "./mainA-2.vue";
import mainNo3 from "./mainA-3.vue";
import mainNo4 from "./mainA-4.vue";
export default {
  data() {
    return {
      //外层容器的宽度
      waichengWidth: null,

      //用于判断是否添加 mainNo3组件
      isNo3: null,
    };
  },
  components: {
    mainNo1,
    mainNo2,
    mainNo3,
    mainNo4,
  },
  created() {
    ////添加轮播图最外层的宽度
    this.waichengWidth =
      document.documentElement.clientWidth >= 1000 ? 550 : 470;
    this.$store.commit('modifyWidth',document.documentElement.clientWidth >= 1000 ? 1200 : 900);
    this.waichengWidth >= 550 ? (this.isNo3 = true) : (this.isNo3 = false);

    //监听窗口尺寸变化事件
    window.onresize = () => {
      let width = document.documentElement.clientWidth;
      if (width < 1000) {
        this.waichengWidth = 470;
        this.isNo3 = false;
        this.$store.commit('modifyWidth',900);
      } else if (width < 2000) {
        this.waichengWidth = 550;
        this.isNo3 = true;
        this.$store.commit('modifyWidth',1200)
      } else {
        this.waichengWidth = 800;
        /* location.reload(); */
        this.isNo3 = true;
      }
    };
  },
};
</script>

<style scoped>
.mainA {
  display: flex;
}
</style>