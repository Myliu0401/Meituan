<template>
  <div class="Product">
    <div class="Ptop">
      <span>{{ $store.state.dizhi + "美团" }}<i class="imi"></i></span>
      <span>{{ $store.state.dizhi + this.$store.state.inputText }}</span>
      <span><router-link to="/" target="_blank">新窗口</router-link></span>
    </div>
    <div class="Myzhuti" v-MyHeight>
      <left></left>
      <right :height="Totalheight"></right>
    </div>
  </div>
</template>


<script>
import Left from "./Product-left/index.vue";
import Right from "./Product-right/index.vue";
export default {
  data() {
    return {
      Totalheight: null,
    };
  },
  components: {
    Left,
    Right,
  },
  computed: {},
  directives: {
    MyHeight: {
      inserted(el, binding, vnode) {
        //获取主体内容的总高度,为后面的吸附效果做准备
        vnode.context.Totalheight = getComputedStyle(el).height;
        console.log(vnode.context.Totalheight,el)
        window.onresize = () => {
          vnode.context.Totalheight = getComputedStyle(el).height;
        };
      },
    },
  },
};
</script>

<style scoped>
.Product {
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-top: 15px;
}
.Product .Ptop {
  box-sizing: border-box;
  margin: 10px 0px;
  color: #222222;
  font-size: 12px;
}
.Product .Ptop span {
  margin-right: 13px;
  position: relative;
}
.Product .Ptop span:hover {
  color: #fe8c00;
  cursor: pointer;
}
.imi {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-right: 1px solid #008c8c;
  border-bottom: 1px solid #008c8c;
  transform: rotate(-45deg);
  position: absolute;
  top: 5px;
}
@media screen and (min-width: 2000px) {
  .Product {
    width: 90%;
  }
}

@media screen and (max-width: 1000px) {
  .Product {
    width: 900px;
  }
}

.Myzhuti {
  display: flex;
}
</style>