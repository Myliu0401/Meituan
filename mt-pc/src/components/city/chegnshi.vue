<template>
  <div class="chengshi">
    <div class="Searcharea">
      <div class="left">
        <h3>按省份选择：</h3>
        <div class="naimi div v1 xuanzhong v-1" @click="dianji">
          {{ $store.state.province }} <i class="xuanzhong v-1"></i>
          <div class="fu f1 v-1" v-if="is">
            <dl class="v-1">
              <dt class="v-1">省份</dt>
              <div class="opz v-1">
                <div
                  class="midiv v-1"
                  v-for="(lel, index) in rowNumberOfProvincesList"
                  :key="index"
                >
                  <dd
                    v-for="lel1 in lel"
                    :key="lel1.provinceCode"
                    @click="ddDianji(lel1, lel1.provinceName)"
                    class="v-1"
                  >
                    {{ lel1.provinceName }}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
        <div
          :class="{
            naimi: $store.state.province !== '省份',
            minai: $store.state.province === '省份',
          }"
          class="div v2"
          @click="dianji1"
        >
          {{ $store.state.city }} <i></i>
          <div class="fu v2" v-if="rowNumberOfCityList.length && is1">
            <dl class="v2">
              <dt class="v2">城市</dt>
              <div class="opz v2">
                <div
                  v-for="(ele, index) in rowNumberOfCityList"
                  :key="index"
                  class="v2"
                >
                  <dd
                    v-for="lel in ele"
                    :key="lel.id"
                    @click="dianji2(lel.name)"
                    class="v2"
                  >
                    <router-link to="/">{{ lel.name }}</router-link>
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <div class="right">
        <h3>直接搜索：</h3>
        <input
          type="text"
          placeholder="输入城市中午或拼音"
          @input="dianjiinput"
          @blur="shijiao"
          v-model="inputText"
        />
        <div class="fu f2" v-if="is2">
          <ul>
            <template v-if="searchCitys.length">
              <li
                v-for="(ele, index) in searchCitys"
                :key="index"
                @click="$store.state.dizhi = ele"
              >
                <router-link to="/">{{ ele }}</router-link>
              </li>
            </template>
            <template v-else>
              <li>未找到匹配的城市</li>
            </template>
          </ul>
        </div>
      </div>
    </div>

    <Citytable
      class="Citymisi"
      v-for="(ele, index) in hotCities"
      :key="index"
      :citys="ele"
    ></Citytable>
    <ListOf :chengshi="chengshi" :shengfen="listOfProvinces"></ListOf>
  </div>
</template>


<script>
import axios from "../../http.js";
import Citytable from "./Citytable.vue";
import ListOf from "./ListOfCities.vue";
export default {
  data() {
    return {
      /* province: "省份", 这两个属性都放置在Vuex中
      city: "城市", */

      //装省份列表
      listOfProvinces: [],

      //装省份列表的排数
      rowNumberOfProvincesList: [],

      //装城市列表的排数
      rowNumberOfCityList: [],

      //装搜索的城市
      searchCitys: [],

      //用于判断省份列表
      is: false,

      //用于判断城市列表
      is1: false,

      //用于input元素的v-model指令
      inputText: "",

      //用于判断直接搜索城市列表
      is2: false,

      //用于装热门城市
      hotCities: [],

      //用于装有红色字体城市
      chengshi: [],
    };
  },
  methods: {
    //点击省份框架
    dianji() {
      if (!event.target.classList.contains("xuanzhong")) {
        return false;
      }
      this.is = true;
    },

    //点击城市框架
    dianji1() {
      if (this.$store.state.province === "省份") {
        return false;
      }
      this.is1 = true;
    },

    //点击每一个城市
    dianji2(value) {
      this.rowNumberOfCityList = [];
      this.$store.state.city = value;
      this.$store.state.dizhi = value;
      this.is1 = false;
    },

    //点击每一个省份
    ddDianji(data, value) {
      this.chuli(data.cityInfoList, (this.rowNumberOfCityList = []));
      this.$store.state.province = value;
      this.is = false;
    },

    //处理将省份和城市列表排成几排
    chuli(data, Arr) {
      const num = data.length / 12;
      const arr = Arr;
      for (var i = 0; i < Math.ceil(num); i++) {
        arr.push(data.slice(i * 12, (i + 1) * 12));
      }
    },

    //input事件处理函数
    dianjiinput() {
      this.is2 = true;
      this.searchCitys.length = 0;
      this.listOfProvinces.forEach((ele, index) => {
        return ele.cityInfoList.filter((ele1, index1) => {
          if (
            !(
              this.inputText === ele1.firstChar ||
              this.inputText === ele1.firstChar.toLowerCase() ||
              ele1.name.includes(this.inputText ? this.inputText : false)
            )
          ) {
            return false;
          }
          this.searchCitys.push(ele1.name);
        });
      });
    },

    //失焦事件处理函数
    shijiao() {
      setTimeout(() => {
        this.is2 = false;
      }, 100);
    },
  },

  created() {
    //获取省份列表
    axios.listOfProvinces().then((shuju) => {
      this.listOfProvinces = shuju.data;
      this.chuli(shuju.data, (this.rowNumberOfProvincesList = []));
    });

    //获取城市列表
    axios.listOfCities().then((shuju) => {
      this.chengshi = shuju.data;
    });

    //获取热门城市
    axios.hotCities().then((shuju) => {
      this.hotCities.push([
        {
          title: "热门城市",
          data: shuju.data,
        },
      ]);
    });

    //获取最近访问的城市
    axios.recentCityVisit().then((shuju) => {
      this.hotCities.push([
        {
          title: "最近访问",
          data: shuju.data,
        },
      ]);
    });

    //给document.documentElement添加点击事件
    document.documentElement.addEventListener("click", (e) => {
      e.target.classList.contains("v-1") || (this.is = false);
      e.target.classList.contains("v2") || (this.is1 = false);
    });
  },

  components: {
    Citytable,
    ListOf,
  },
};
</script>


<style scoped>
@import url("../../assets/css/city/Searcharea.css");

.Citymisi {
  box-sizing: border-box;
  padding: 30px 0px;
  border-bottom: 1px solid #e5e5e5;
}
</style>

