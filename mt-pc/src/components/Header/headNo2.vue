2<template>
  <div class="HeadNo2">
    <div class="po1">
      <div class="left">
        <router-link to="/"
          ><img
            src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            alt="美团"
        /></router-link>
      </div>
      <div class="center">
        <div class="inputbox">
          <input
            @focus="focus"
            @blur="blur"
            v-model="textinput"
            @input="clinput"
            type="text"
            placeholder="搜索商家或地点"
          />

          <button>
            <router-link :to="textinput ? '/Product' : ''"><i style="color:black"></i></router-link>
          </button>
        </div>
        <div class="pk1" v-if="textArr.length">
          <div
            v-for="(ele, index) in textArr"
            :key="index"
            @click="dianjimi(ele)"
          >
            <router-link to="/Product">{{ ele }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from "../../http.js";
export default {
  data() {
    return {
      textinput: "",
      textArr: [],
      textArr1: [],
    };
  },
  methods: {
    //当输入时发送网络请求
    clinput() {
      //发送网络请求
      ajax.searchContentRequest().then((data) => {
        const str = this.textinput;
        /* this.textArr = data.data.list; */
        //进行过滤
        this.textArr = data.data.list.filter((ele) => {
          if (!this.textinput) {
            return false;
          }
          return ele.indexOf(str) > -1;
        });

        if (!this.textinput) {
          this.textArr = this.textArr1;
          if (!this.textArr.length) {
            return;
          }
          this.focus();
        }
      });
    },

    //聚焦事件
    focus() {
      ajax.searchBoxFocus().then((shuju) => {
        this.textArr = this.textArr1 = shuju.data;
      });
    },

    //失焦事件
    blur() {
      setTimeout(() => {
        this.textArr = [];
      }, 100);
    },
  
    //点击
    dianjimi(value){
        this.textinput = value;
        this.$store.commit('modifyzhi',value)
    }
  },



};
</script>

<style scoped>
@import "../../assets/css/Header/HeaderNo2.css";
</style>