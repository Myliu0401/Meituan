<template>
  <div class="mainA4">
    <div class="mi">
      <div class="m1">
        <div class="img">
          <img :src="img1Url" alt="登录" />
        </div>
        <p>Hi! 你好</p>
        <div class="m0" v-if="!$store.state.SignIn">
          <span>
            <router-link to="/register">注册</router-link>
          </span>
          <span>
            <router-link to="/SignIn">立即登录</router-link>
          </span>
        </div>
        <div v-else>
            <span @click="tuichu">退出登录</span>
        </div>
      </div>
      <div class="m2">
          <div class="mA2">
              <img :src="img2Url" alt="二维码">
          </div>
          <div class="mA3">
              <p>美团APP手机版</p>
              <p><span>1元起</span><span>吃喝玩乐</span></p>
          </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      img1Url: "//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg",
      img2Url:'//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png',
      /* is:true, */
    };
  },

  methods: {
    //退出登录
    tuichu(){
      this.$store.dispatch('MyModiSignIn',false);
      const Da = new Date();
      document.cookie = `naisi=true;expires=${+Da-10000}`;
      //清除本地缓存
      localStorage.removeItem('name')
      // localStorage.clear()//全部清除
    }
  },
};
</script>


<style scoped>
@import url("../../../assets/css/Main/MainA/MainA-4.css");
</style>