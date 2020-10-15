<template>
  <div class="SignIn">
    <header class="header">
      <router-link to="/"><div class="logo"></div></router-link>
    </header>
    <main>
      <div class="Mymain">
        <div class="BackgroundMap">
          <img
            src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
            alt="图片"
          />
        </div>
        <div class="LoginArea">
          <div class="minaisi">
            <div class="error" :class="{ naisiYe: !naisiYe }">
              <i class="mp"></i>{{ naisiYe }}
            </div>
            <span class="spanmi">账号登录</span>
            <div
              class="accountNumber"
              @click="dianji('账号')"
              :class="{ misiYe: misi === '账号' }"
            >
              <span class="number">
                <span class="mik"></span>
                <span class="shuzi">86</span>
                <i class="i"></i>
              </span>
              <input
                type="text"
                class="zhn"
                placeholder="手机号"
                maxlength="15"
                v-model="zhanghao"
              />
            </div>
            <div
              class="password"
              @click="dianji('密码')"
              :class="{ misiYe: misi === '密码' }"
            >
              <i class="shuo"></i>
              <input
                type="password"
                class="mima"
                placeholder="密码"
                v-model="mima"
              />
            </div>
            <div class="waiji">忘记密码?</div>
            <input type="submit" class="anniu" value="登录" @click="denglu" />
            <p class="meiyou">
              还没有账号?<router-link to="/register">免费注册</router-link>
            </p>
          </div>
          <div class="naisimi">
            <h3 class="h3"><span>用合作网站账号登录</span></h3>
            <div class="tubiao">
              <span class="QQ"></span>
              <span class="weixin"></span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="top0">
        <ul>
          <li
            v-for="(ele, index) in Arr"
            :key="index"
            :class="{ xun: Arr.length > 1 && index < Arr.length - 1 }"
          >
            {{ ele }}
          </li>
        </ul>
      </div>
      <div class="top9">
        <p>该网站无任何实际功能,只供学习和参考,版权问题请见谅!!!</p>
      </div>
    </footer>
  </div>
</template>




<script>
/* userLogin */
import axios from "../../http.js";
export default {
  data() {
    return {
      Arr: ["关于美团", "加入我们", "商家入驻", "帮助中心", "美团手机版"],
      misi: "",
      zhanghao: "",
      mima: "",
      naisiYe: "",
    };
  },
  methods: {
    dianji(value) {
      this.misi = value;
      this.naisiYe = "";
      event.stopPropagation();
    },
    denglu() {
      axios
        .userLogin({
          params: {
            userName: this.zhanghao,
            password: this.mima,
          },
        })
        .then((shuju) => {
          console.log(shuju);
          if (shuju.status === "success" && shuju.msg === '登录成功') {
               this.$store.dispatch('MyModiSignIn',true);
               const Da = new Date();
               document.cookie = `naisi=true;expires=${+Da + 1000000}`;

               localStorage.setItem('name','666')
              console.log(localStorage.getItem('name1'));//获取数据
               this.$router.push('/');
          } else {
            this.naisiYe =
              shuju.msg === "用户名必须为4-16位的字母数字下划线组成"
                ? "请输入正确的账号"
                : shuju.msg;
              this.$store.dispatch('MyModiSignIn',false);
          }
        });
    },
  },
  created() {
    document.documentElement.onclick = () => {
      this.misi = "";
    };
  },
};
</script>




<style scoped>
@import url("../../assets/css/SignUp/SignIn.css");
</style>
