<template>
  <div class="register">
    <header class="mitobu">
      <div class="tobu">
        <router-link to="/"><div class="logo"></div></router-link>
        <div class="right">
          <span class="text">已有美图账号？</span>
          <router-link to="/SignIn"
            ><span class="denglu111">登录</span></router-link
          >
        </div>
      </div>
    </header>
    <main>
      <div class="Mymain111 Myp">
        <div class="shuruqu">
          <div class="inputA">
            <label>账号/手机号</label>
            <input
              v-model="account"
              type="text"
              @blur="shijiao('账号')"
              @focus="jujiao('账号')"
              :class="{ okm: focusing === '账号' }"
            />
            <span class="fuhao" v-if="Defocus.indexOf('账号') >= 0">
              <i :class="{ i111: zuihou['账号'] === true }"></i>
              {{ zuihou["账号"] === true ? "" : zuihou["账号"] }}
            </span>
          </div>
          <div class="inputA mi">
            <label>创建密码</label>
            <input
              v-model="password"
              type="password"
              @blur="shijiao('创建密码')"
              @focus="jujiao('创建密码')"
              :class="{ okm: focusing === '创建密码' }"
            />
            <div class="qiandu">
              <div
                class="lo"
                :class="{
                  A: password.length > 0 && password.length <= 4,
                  B: password.length > 4 && password.length <= 8,
                  C: password.length > 8,
                }"
              ></div>
              <div class="kl">
                <span>弱</span>
                <span>中</span>
                <span>强</span>
              </div>
            </div>
            <span class="fuhao" v-if="Defocus.indexOf('创建密码') >= 0">
              <i :class="{ i111: zuihou['创建密码'] === true }"></i>
              {{ zuihou["创建密码"] === true ? "" : zuihou["创建密码"] }}
            </span>
          </div>
          <div class="inputA">
            <label>确认密码</label>
            <input
              v-model="determine"
              type="password"
              @blur="shijiao('确认密码')"
              @focus="jujiao('确认密码')"
              :class="{ okm: focusing === '确认密码' }"
            />
            <span class="fuhao" v-if="Defocus.indexOf('确认密码') >= 0">
              <i :class="{ i111: zuihou['确认密码'] === true }"></i>
              {{ zuihou["确认密码"] === true ? "" : zuihou["确认密码"] }}
            </span>
          </div>
          <div class="inputA">
            <span class="sp1" @click="Mydenglu"> 同意以下协议并注册 </span>
          </div>
        </div>
        <div class="xieyi">
          <span>《美团点评用户服务协议》</span>
          <span>《美团点评隐私政策》</span>
        </div>
      </div>
    </main>
    <footer>
      <div class="misifoo">
        该网站无任何实际功能,只是实战作品,版权问题请见谅!!!
      </div>
    </footer>
  </div>
</template>



<script>
import axios from "../../http.js";
export default {
  data() {
    return {
      //聚焦
      focusing: "",

      //失焦
      Defocus: [],

      //账号
      account: "",

      //密码
      password: "",

      //确定密码
      determine: "",

      //用于提示
      zuihou: {},
    };
  },
  methods: {
    jujiao(value) {
      this.focusing = value;
      const n = this.Defocus.indexOf(value);
      n >= 0 ? this.Defocus.splice(n, 1) : "";
      /* console.log(this.Defocus); */
    },
    shijiao(value) {
      //账号和密码校验规则
      if (value === "账号") {
        const str = /^1\d{10}$/g;
        this.zuihou["账号"] = str.test(parseInt(this.account))
          ? true
          : this.account.length
          ? "请输入正确的11位手机号码"
          : "请输入您的手机号码";
      } else if (value === "创建密码") {
        const str = /^\w{8,12}$/g;
        this.zuihou["创建密码"] = str.test(this.password)
          ? true
          : !this.password.length
          ? "请填写密码"
          : this.password.length < 8
          ? "密码太短至少8位"
          : "密码必须是6-12位的字符,只能包含数字、字母、下划线";
      } else if (value === "确认密码") {
        this.zuihou["确认密码"] =
          this.password === this.determine
            ? this.password === ""
              ? "请再次输入密码"
              : true
            : !this.determine.length
            ? "请再次输入密码"
            : "两次密码不一致,请重新输入";
      }
      if (this.Defocus.indexOf(value) < 0) {
        this.Defocus.push(value);
      }
    },
    Mydenglu() {
      axios
        .registeredUsers({
          params: {
            userName: this.account, //账号
            password: this.password, //密码
            rePassword: this.determine, //确认密码
          },
        })
        .then((shuju) => {
          console.log(shuju);
          if (shuju.msg === "注册成功") {
            this.$router.push("/");
          } else if (shuju.msg === "用户名已存在") {
            window.alert(shuju.msg);
          }
        });
    },
  },
};
</script>



<style scoped>
@import url("../../assets/css/SignUp/register.css");
.okm {
  border-color: #ffc300 !important;
}
.mko {
  border-color: #f76120 !important;
}

i.i111 {
  background-position: 0 -453px;
}

.lo.A {
  background-color: #f76120;
  width: 85px;
}
.lo.B {
  background-color: #ff8900;
  width: 172px;
}
.lo.C {
  background-color: #5bab3c;
  width: 260px;
}
</style>
