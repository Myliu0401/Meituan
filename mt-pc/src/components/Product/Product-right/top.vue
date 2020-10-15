<template>
  <div class="top11" v-adsorbent :style="{ top: top, boxShadow: boxShadow }">
    <div class="imgmi"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      top: 0,
      boxShadow: "",
    };
  },
  props: ["height"],
  directives: {
    //吸附指令
    adsorbent: {
      inserted(el, binding, vnode) {
        window.onscroll = function () {
          const height = parseInt(vnode.context.height); //主体内容的总高度
          let top = el.getBoundingClientRect().top; //top的div距离视口的top值
          if (top <= -3) {
            vnode.context.top =
              parseInt(vnode.context.top) + Math.abs(top) + "px";
            vnode.context.boxShadow = "0 5px 14px 0 rgba(0,0,0,0.19)";
          } else if (parseInt(vnode.context.top) > 0) {
            vnode.context.top = parseInt(vnode.context.top) - top + "px";
            vnode.context.boxShadow = "0 5px 14px 0 rgba(0,0,0,0.19)";
          }
          if (parseInt(vnode.context.top) < 0) {
            vnode.context.boxShadow = "";
            vnode.context.top = 0;
          } else if (parseInt(vnode.context.top) >= height - 240) {
            vnode.context.boxShadow = "";
            vnode.context.top = parseInt(height - 240) + "px";
          }
        };
      },
    },
  },
};
</script>


<style scoped>
@import url("../../../assets/css/smallIcons/ditu.css");
@import url("../../../assets/css/Product/right/top.css");
.naisiA {
  box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.19);
}
</style>