<template>
  <div class="MainB3">
    <div class="top">
      <dl v-for="ele in GuessYouLikeIt" :key="ele.id">
        <dt>{{ ele.title }}</dt>
        <dd
          v-for="(ele1, index1) in ele.DataArr"
          :key="ele1.id"
          @mouseenter="jinru(index1)"
          :class="{ misi: index1 === indexmi }"
          :data-type="ele1.type"
        >
          {{ ele1.title }}
        </dd>
      </dl>
    </div>
    <div class="bottom">
      <ul v-for="ele in GuessYouLikeIt" :key="ele.id" class="naisimi">
        <li
          v-for="ele1 in ele.DataArr[indexmi].datas"
          :key="ele1.id"
          class="naisi"
        >
          <div class="top1">
            <img :src="ele1.imgUrl" alt="图片" />
          </div>
          <div class="bottom1">
            <p class="p1">{{ ele1.title }}</p>
            <div class="b1">
              <div>
                <ul>
                  <li v-for="ele3 in 5" :key="ele3"></li>
                </ul>
                <ul :style="{ width: ele1.starsWidth }">
                  <li v-for="ele3 in 5" :key="ele3"></li>
                </ul>
              </div>
              <span>{{ ele1.evaluate }}</span>
            </div>
            <p class="p2">{{ ele1.address }}</p>
            <p class="p3"><span>¥</span>{{ ele1.money }}<span>起</span></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //模拟后端数据
      GuessYouLikeIt: [
        {
          title: "猜你喜欢",
          id: Math.random(),
          DataArr: [
            {
              title: "为你甄选最合适的",
              type: "Selection",
              datas: [
                {
                  imgUrl:
                    "//p1.meituan.net/deal/__46518410__8538854.jpg@267w_150h_1e_1c",
                  title: "盘古烤猪蹄（鹿都店）",
                  starsWidth: "88%",
                  id: Math.random(),
                  evaluate: "17495个评价",
                  address: "中山中路",
                  money: "17.5",
                },
                {
                  imgUrl:
                    "//p0.meituan.net/mogu/c90fda9e4bbefee41e99eaa304929d6c109781.jpg@267w_150h_1e_1c",
                  title: "名火汇烤肉海鲜自助（宝龙店）",
                  starsWidth: "74%",
                  id: Math.random(),
                  evaluate: "1691个评价",
                  address: "青浦城区",
                  money: "69.0",
                },
                {
                  imgUrl:
                    "//p0.meituan.net/deal/23f2ea5196d895a78cd2a5c83e93e3ae244867.jpg@267w_150h_1e_1c",
                  title: "苹果花园（金沙江店）",
                  starsWidth: "84%",
                  id: Math.random(),
                  evaluate: "525个评价",
                  address: "长风公园/华师大",
                  money: "65.0",
                },
                {
                  imgUrl:
                    "//p1.meituan.net/msmerchant/91b5119ab1e9456d21ab09208bae46d1397316.jpg@267w_150h_1e_1c",
                  title: "靚灶小院（松江东鼎店）",
                  starsWidth: "94%",
                  id: Math.random(),
                  evaluate: "798个评价",
                  address: "新松江路",
                  money: "28.0",
                },
                {
                  imgUrl:
                    "//p1.meituan.net/dpmerchantpic/9ab9e18c3e1071908a430434a2ffdce8484835.jpg@267w_150h_1e_1c",
                  title: "南瓜车造型（中山公园店）",
                  starsWidth: "90%",
                  id: Math.random(),
                  evaluate: "469个评价",
                  address: "中山公园/江苏路",
                  money: "38.0",
                },
                {
                  imgUrl:
                    "//p0.meituan.net/joymerchant/1587726507938194581-3043341-1538042248059.jpg@267w_150h_1e_1c",
                  title: "网鱼网咖（松江涞坊路店）",
                  starsWidth: "84%",
                  id: Math.random(),
                  evaluate: "14个评价",
                  address: "九亭",
                  money: "19.0",
                },
                {
                  imgUrl:
                    "//p1.meituan.net/bbia/5e4b4e66b120e25ba0989492d921724320794.png@267w_150h_1e_1c",
                  title: "味多美（虹梅南路店）",
                  starsWidth: "100%",
                  id: Math.random(),
                  evaluate: "385个评价",
                  address: "莲花路/南方商城",
                  money: "2.5",
                },
                {
                  imgUrl:
                    "//p0.meituan.net/msmerchant/d7e7af637a4f22863cf82ef1ed477d9b622426.jpg@267w_150h_1e_1c",
                  title: "味多美（虹梅南路店）",
                  starsWidth: "100%",
                  id: Math.random(),
                  evaluate: "1184个评价",
                  address: "莲花路/南方商城",
                  money: "21.0",
                },
                {
                  imgUrl:
                    "//p0.meituan.net/bbia/bb7c7deae63aad3787a85b9d3ba161a639188.jpg@267w_150h_1e_1c",
                  title: "味多美（虹梅南路店）",
                  starsWidth: "86%",
                  id: Math.random(),
                  evaluate: "1616个评价",
                  address: "静安寺",
                  money: "95.0",
                },
                {
                  imgUrl:
                    "//p0.meituan.net/msmerchant/cbca7eaec9607f5db010813f9a40a32d466410.jpg@267w_150h_1e_1c",
                  title: "鑫海汇烤肉自助餐厅（巴黎春天店）",
                  starsWidth: "80%",
                  id: Math.random(),
                  evaluate: "15166个评价",
                  address: "娄山关路/威宁路",
                  money: "88.9",
                },
                {
                  imgUrl:
                    "//p0.meituan.net/mogu/98e8b2c65a499047541ab9ef2b48038f518296.png@267w_150h_1e_1c",
                  title: "一品鸡排（松江万达店）",
                  starsWidth: "82%",
                  id: Math.random(),
                  evaluate: "341个评价",
                  address: "松江万达广场",
                  money: "9.5",
                },
                {
                  imgUrl:
                    "//p1.meituan.net/mogu/9edaf9554cd9e44d4df3beeb283513b2808790.jpg@267w_150h_1e_1c",
                  title: "上海富悦大酒店",
                  starsWidth: "94%",
                  id: Math.random(),
                  evaluate: "5516个评价",
                  address: "松江万达广场",
                  money: "168.0",
                },
                {
                  imgUrl:
                    "//p0.meituan.net/joymerchant/-9216000489115943161-1220821-1541946423971.jpg@267w_150h_1e_1c",
                  title: "绿岛汗蒸洗浴",
                  starsWidth: "80%",
                  id: Math.random(),
                  evaluate: "8523个评价",
                  address: "大宁国际",
                  money: "9.0",
                },
                {
                  imgUrl:
                    "//p1.meituan.net/mogu/dee72e2f971b6f4370fcb4871bcf30694931.jpg@267w_150h_1e_1c",
                  title: "汉霸汉堡（太阳山路店）",
                  starsWidth: "88%",
                  id: Math.random(),
                  evaluate: "206个评价",
                  address: "上海火车站",
                  money: "12.8",
                },
                {
                  imgUrl:
                    "//p0.meituan.net/mogu/df621857d1ac3932bf43351492dc1155415154.jpg@267w_150h_1e_1c",
                  title: "酷肯曼·牛排自助餐厅（江桥万达店）",
                  starsWidth: "88%",
                  id: Math.random(),
                  evaluate: "1672个评价",
                  address: "江桥万达广场",
                  money: "65.0",
                },
              ],
            },
          ],
        },
      ],

      //默认选中索引对应的数据
      indexmi: 0,

      //计时器编号
      indexTiem: null,
    };
  },

  methods: {
    jinru(i) {
      clearTimeout(this.indexTiem);
      this.indexTiem = setTimeout(() => {
        this.indexmi = i;
      }, 100);
    },
  },
};
</script>


<style scoped>
@import url("../../../assets/css/typeface/ziti.css");
@import url("../../../assets/css/smallIcons/lcon1.css");
@import url("../../../assets/css/Main/MainB/mainB-3.css");
</style>