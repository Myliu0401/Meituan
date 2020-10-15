<template>
  <div class="HeadNo1">
    <div class="ke">
      <div class="left">
        <div class="left1">
          <div class="v1">
            <div>
              <i class="iconfont"></i>
              <span>{{ $store.state.dizhi }}</span>
            </div>
            <span class="button" @click="mydianji"
              ><router-link to="/city">切换城市</router-link></span
            >
            <div>
              [
              <a ref="#" v-for="ele in $store.state.dizhis" :key="ele.id">{{
                ele.name
              }}</a>
              ]
            </div>
          </div>
          <div class="denglu" v-if="!$store.state.SignIn">
            <router-link to="/SignIn">立即登录</router-link>
            <router-link to="/register">注册</router-link>
          </div>
          <div class="denlu" v-else>
            <router-link to="/" @click.native="tuichu">退出登录</router-link>
          </div>
        </div>
        <div class="right1"></div>
      </div>
      <div class="right">
        <ul class="nav">
          <li class="li">
            <router-link to="/">我的美团</router-link>
            <dl class="dl-v">
              <dd v-for="(ele, index) in Meituan" :key="index">{{ ele }}</dd>
            </dl>
          </li>
          <li>
            <router-link to="/">手机App</router-link>
          </li>
          <li class="li">
            <router-link to="/">商家中心</router-link>
            <dl class="shangjia dl-v">
              <dd v-for="(ele, index) in business" :key="index">{{ ele }}</dd>
            </dl>
          </li>
          <li class="li">
            <router-link to="/">美团规则</router-link>
            <dl class="dl-v">
              <dd v-for="(ele, index) in rule" :key="index">{{ ele }}</dd>
            </dl>
          </li>
          <li class="li">
            <router-link to="/">网站导航</router-link>
            <div class="daohan">
              <dl
                v-for="(ele, index) in filterA"
                :key="index"
                :class="'dl-' + (index + 1)"
              >
                <dt>{{ ele.text }}</dt>
                <dd v-for="(ele1, index1) in ele.son" :key="index1">
                  {{ ele1 }}
                </dd>
              </dl>
              <dl
                v-for="(ele, index) in filterB"
                :key="ele + index"
                :class="'dl-' + navigation.length"
              >
                <dt>{{ ele.text }}</dt>
                <dd v-for="(ele1, index1) in ele.son" :key="index1">
                  <img :src="ele1" alt="图片" />
                </dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "../../http.js";
export default {
  data() {
    return {
      business: [
        "美团餐饮商户中心",
        "登录商家中心",
        "美团智能收银",
        "我想合作",
        "手机免费开店",
        "餐饮代理商招募",
        "商家申请开票",
        "免费合作美团排队",
      ], //商家中心的二级导航数据
      rule: ["我的订单", "规则目录", "规则评议院"], //美团规则二级导航数据
      Meituan: ["我的订单", "我的收藏", "抵用券", "账户设置"], //我的美团二级导航数据
      navigation: [
        {
          text: "酒店旅游",
          son: [
            "国际机票",
            "火车票",
            "民宿",
            "经济型酒店",
            "主题酒店",
            "商务酒店",
            "公寓",
            "豪华酒店",
            "客栈",
            "青年旅社",
            "度假酒店",
            "别墅",
            "农家院",
          ],
        },
        {
          text: "吃美食",
          son: ["烤鱼", "特色小吃", "烧烤", "自助餐", "火锅", "代金券"],
        },
        {
          text: "看电影",
          son: [
            "热映电影",
            "热门影院",
            "热映电影口碑榜",
            "最受期待电影",
            "国内票房榜",
            "北美票房榜",
            "电影排行榜",
          ],
        },
        {
          text: "手机应用",

          son: [
            "//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png",
            "//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png",
            "https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png",
            "//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png",
            "//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png",
          ],
        },
      ], //网站导航的二级导航
    };
  },
  computed: {
    filterA() {
      return this.navigation.filter((ele, index) => {
        return index < this.navigation.length - 1;
      });
    },
    filterB() {
      return this.navigation.filter((ele, index) => {
        return index === this.navigation.length - 1;
      });
    },
  },

  methods: {
    mydianji() {
      this.$store.commit("modifyProvince", "省份");
      this.$store.commit("modifyCity", "城市");
    },
  },

  created() {
    axios.currentLocation().then((shuju) => {
      this.$store.commit("modifyDizhi", shuju.data.name);
      this.$store.commit("modifyDizhis", shuju.data.nearCity);
    });
  },

  //退出登录
  tuichu(){
     this.$store.dispatch('MyModiSignIn',false);
  }
};
</script>

<style scoped>
/* 头部最上边的左侧样式 */
@import "../../assets/css/Header/HeaderNo1.css";
@import "../../assets/css/smallIcons/Icon.css";

/* 头部最上边的右侧样式 */
@import "../../assets/css/Header/HeaderNo1-right.css";
</style>