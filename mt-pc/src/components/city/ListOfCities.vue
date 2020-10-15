<template>
  <div class="ListOfCities">
    <div class="Initials">
      <dl>
        <dt>按拼音首字母选择:</dt>
        <dd v-for="(ele, index) in zhongzui" :key="index">
          <a :href="'#city-' + index">{{ index }}</a>
        </dd>
      </dl>
    </div>
    <div class="AcronymCity">
      <div v-for="(ele, index) in zhongzui" :key="index" class="CityS">
        <dl>
          <dt :id="'city-'+index">{{ index }}</dt>
          <div class="divM">
            <dd v-for="ele1 in ele" :key="ele1" @click="$store.state.dizhi = ele1">
              <router-link
                to="/"
                :class="{ xuanzhong: classMi(ele1).length }"
                >{{ ele1 }}</router-link
              >
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chengshi: {
      type: Array,
      default: () => {
        return [];
      },
      required: true,
    },
    shengfen: {
      type: Array,
      default: () => {
        return [];
      },
      required: true,
    },
  },
  data() {
    return {
      Initials: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    };
  },
  components: {},

  methods: {
    //生成26个字母的数组
    shouzimu() {
      return this.Initials.split("");
    },

    //获取每个城市头字母的城市对象
    acronymCity() {
      const Obj = {};
      this.shouzimu().forEach((ele, index) => {
        Obj[ele] = [];
      });
      this.shengfen.forEach((ele, index) => {
        ele.cityInfoList.forEach((ele1, index1) => {
          Obj[ele1.firstChar].push(ele1.name);
        });
      });
      return Obj;
    },

    //用于class类名的判断
    classMi(value) {
      return this.chengshi.filter((ele, index) => {
        return ele.name === value;
      });
    },
  },

  computed: {
    zhongzui() {
      const OBJ = this.acronymCity();
      this.shouzimu().forEach((ele, index) => {
        OBJ[ele].length || delete OBJ[ele];
      });
      return OBJ;
    },
  },
};
</script>

<style scoped>
.ListOfCities .Initials {
  padding: 30px 0px;
}
.ListOfCities .Initials dl {
  display: flex;
  box-sizing: border-box;
}
.ListOfCities .Initials dl dd {
  font-size: 15px;
  margin: 0px 5px;
  box-sizing: border-box;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  text-align: center;
}
.ListOfCities .Initials dl dd a {
  color: #666666;
}
.ListOfCities .Initials dl dd a:hover {
  color: #222222;
}
.ListOfCities .Initials dl dd:hover {
  font-weight: 500;
  color: #222222;
  background-color: #f8f8f8;
}

.ListOfCities .AcronymCity .CityS {
  padding: 13px 30px 13px 10px;
  box-sizing: border-box;
  border-radius: 10px;
}
.ListOfCities .AcronymCity .CityS:hover {
  background-color: #f8f8f8;
}

.ListOfCities .AcronymCity .CityS dl dt {
  width: 40px;
  height: 40px;
  box-sizing: border-box;
  background-color: #ffd000;
  text-align: center;
  border-radius: 50%;
  line-height: 40px;
  color: #222222;
}
.ListOfCities .AcronymCity .CityS dl {
  display: flex;
  box-sizing: border-box;
}
.ListOfCities .AcronymCity .CityS dl .divM {
  display: flex;
  box-sizing: border-box;
  max-width: 1065px;
  flex-wrap: wrap;
}
.ListOfCities .AcronymCity .CityS dl .divM dd {
  margin: 10px 20px;
  box-sizing: border-box;
  font-size: 14px;
  box-sizing: border-box;
}
.ListOfCities .AcronymCity .CityS dl .divM dd a {
  color: #666666;
}
.ListOfCities .AcronymCity .CityS dl .divM dd a:hover {
  color: #222222 !important;
}
.ListOfCities .AcronymCity .CityS dl .divM dd a.xuanzhong {
  color: #ff6600;
}
</style>