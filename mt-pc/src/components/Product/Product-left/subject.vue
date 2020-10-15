<template>
  <div class="zhuti">
    <div class="top">
      <span
        v-for="(ele, index) in IntelligentSorting"
        :key="index"
        :class="{
          naio: ele.includes('价格'),
          zhong: index === indexI,
          a: ele.includes('价格') && height === '价格最高',
          b: ele.includes('价格') && height === '价格最低',
        }"
        @click="dianji(index, ele)"
        onselectstart="return false"
      >
        {{ ele.includes("价格") ? height : ele }}
      </span>
    </div>
    <div class="bottom">
      <div class="bt1" v-for="(ele, index) in ProductData" :key="index">
        <div class="mileft">
          <span class="myspan">{{ index + 1 }}</span>
          <img :src="ele.image" alt="图片" />
        </div>

        <div class="miright">
          <div class="Maininformation">
            <p class="mip">{{ ele.title }}</p>
            <div class="mi2">
              <div class="Star">
                <ul
                  v-for="Myindex in 2"
                  :key="Myindex"
                  class="UL"
                  :class="{
                    naisiQ: Myindex === 1 && ele.score >= 4 && ele.score < 5,
                    naisiA: Myindex === 1 && ele.score >= 5,
                    naisiP: Myindex === 1 && ele.score <= 3,
                    naisiB: Myindex === 1 && ele.score > 3 && ele.score < 4,
                  }"
                >
                  <li
                    v-for="MniIindex in 5"
                    :key="MniIindex"
                    class="xingxing"
                  ></li>
                </ul>
              </div>
              <span>{{
                ele.score > 4
                  ? "很不错"
                  : ele.score > 3
                  ? "不错"
                  : ele.score >= 5
                  ? "非常好"
                  : "还好"
              }}</span>
              <span>{{ ele.score + "分" }}</span>
              <span class="highlight">{{ ele.commentNum + "人评论" }}</span>
            </div>
            <div class="mi3">
              <p class="mi3A">
                <span v-for="(ele1, index1) in ele.tab" :key="index1">
                  {{
                    ele.tab.length >= 2
                      ? index1 === 0
                        ? ele1
                        : "|" + ele1
                      : ele1
                  }}
                </span>
              </p>
              <span class="address">{{ ele.address }}</span>
              <div class="myditu"><i class="ditu"></i>{{ "查看地图" }}</div>
            </div>
            <div class="mi4">
              <span>{{ "人均¥" + ele.avgPrice }}</span>
            </div>
          </div>
          <div class="Sidemessage" v-if="ele.dealItems.length">
            <div
              class="Side1"
              v-for="(ele2, index2) in ele.dealItems"
              :key="index2"
            >
              <p class="Sp">
                {{ ele2.title }}
              </p>
              <div class="S1">
                <span class="soana">
                  <span class="spanA">¥</span>
                  {{ ele2.price }}
                </span>
                <span class="spanb">{{ "门店价" + ele2.counterPrice }}</span>
                <span class="spanc">{{ "已售" + ele2.saleNum }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import axios from "../../../http.js";
export default {
  data() {
    return {
      //用于生成智能排序列表
      IntelligentSorting: ["智能排序", "价格排序", "人气最高", "评价最高"],

      //价格排序 这个选项要用到
      height: "价格排序",

      //用于切换类名
      indexI: 0,

      //模拟后端数据,产品列表
      ProductData: [
        {
          title: "火鸡老店", //标题
          image:
            "//p0.meituan.net/wmproduct/20ce1ca3bf934b75246577a36cfb2314190732.jpg", //图片地址
          type: "food", //商品类型
          score: 4.1, //商品评分
          commentNum: 1150, //评论数
          comment: [
            {
              username: "xxxx", //用户名
              evalaute: "好吃", //评论
            },
          ], //商品,评论列表
          tab: ["火锅", "沙河"], //商品标签
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3．5公里", //地址
          avgPrice: 65, //平均价格
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用", //标题
              price: 99, //优惠券价格
              counterPrice: 100, //门店价格
              saleNum: 20, //销售量
              priceType: "元", //价格类型
            },
            {
              title: "火鸡包面，建议5-8人使用", //标题
              price: 10, //优惠券价格
              counterPrice: 50, //门店价格
              saleNum: 20000, //销售量
              priceType: "元", //价格类型
            },
          ], //优惠券列表
        },
        {
          title: "广州塔",
          image:
            "//p0.meituan.net/travel/9f422fe103e204f54c19022092c3458a949528.png@275w_156h_1e_1c",
          type: "Travel",
          score: 4,
          commentNum: 31995,
          comment: [
            {
              username: "xxxx",
              evalaute: "好看,震撼",
            },
          ],
          tab: ["高空观景", "客村/赤岗"],
          address: "海珠区阅江西路222号",
          avgPrice: 205,
          dealItems: [],
        },
        {
          title: "珠江夜游广州塔码头",
          image:
            "//p1.meituan.net/hoteltdc/47f7d6e773e8e987a4ea016c7e5e8a32367411.jpg@275w_156h_1e_1c",
          type: "Travel",
          score: 3.9,
          commentNum: 19763,
          comment: [
            {
              username: "xxxx",
              evalaute: "好看,震撼",
            },
          ],
          tab: ["城市观光", "滨江路沿线"],
          address: "海珠区滨江东路163号广州塔码头",
          avgPrice: 133,
          dealItems: [
            {
              title:
                "游纷享公司珠江夜游6选1码头不限船号不限场次1层不限座位（成人票）+茶水",
              price: 55,
              counterPrice: 70,
              saleNum: 196940,
              priceType: "元",
            },
          ],
        },
        {
          title: "广州长隆欢乐世界",
          image:
            "//p0.meituan.net/tdctraveldark/1f3da1100749c8ba83b78eb274309c8e892974.jpg@275w_156h_1e_1c",
          type: "Travel",
          score: 5,
          commentNum: 139023,
          comment: [
            {
              username: "xxxx",
              evalaute: "好看,震撼",
            },
          ],
          tab: ["大型游乐场", "长隆/南村"],
          address: "番禺区番禺大道长隆旅游度假区内",
          avgPrice: 215,
          dealItems: [],
        },
        {
          title: "广州长隆野生动物世界",
          image:
            "//p1.meituan.net/tdctraveldark/ff904ee9715a40bcc5bb7c6b5e9fbae3923457.jpg@275w_156h_1e_1c",
          type: "Travel",
          score: 5,
          commentNum: 77613,
          comment: [
            {
              username: "xxxx",
              evalaute: "好看,震撼",
            },
          ],
          tab: ["动物园", "长隆/南村"],
          address: "番禺区香江大道593号",
          avgPrice: 372,
          dealItems: [],
        },
        {
          title: "白云山风景名胜区",
          image:
            "//p0.meituan.net/travel/0e4f5bf2f4933d4be4e8cc1179a1a7d91121228.png@275w_156h_1e_1c",
          type: "Travel",
          score: 3,
          commentNum: 39763,
          comment: [
            {
              username: "xxxx",
              evalaute: "好看,震撼",
            },
          ],
          tab: ["自然风光", "白云区"],
          address: "白云区广园中路白云山南门",
          avgPrice: 17,
          dealItems: [
            {
              title: "白云山风景名胜区成人票",
              price: 4,
              counterPrice: 4,
              saleNum: 1181741,
              priceType: "元",
            },
          ],
        },
        {
          title: "广州艺术博物院",
          image:
            "//p1.meituan.net/hotel/1bbf8b30187a2d6037d9146c10a28e6b997617.png@275w_156h_1e_1c",
          type: "Travel",
          score: 5,
          commentNum: 0,
          comment: [
            {
              username: "xxxx",
              evalaute: "好看,震撼",
            },
          ],
          tab: ["博物馆", "麓湖公园"],
          address: "越秀区麓湖路13号",
          avgPrice: 24,
          dealItems: [],
        },
        {
          title: "广州艺术博物院",
          image:
            "//p0.meituan.net/travel/e47df4aafab46d80f2e0afbb659e2bdb450626.png@275w_156h_1e_1c",
          type: "Travel",
          score: 4.5,
          commentNum: 141,
          comment: [
            {
              username: "xxxx",
              evalaute: "好看,震撼",
            },
          ],
          tab: ["博物馆", "东风中路/越秀公园"],
          address: "越秀区越秀公园内镇海楼",
          avgPrice: 9,
          dealItems: [],
        },
      ],
    };
  },
  methods: {
    //点击智能排序列表,后的处理
    dianji(index, text) {
      this.indexI = index;
      if (text.includes("价格")) {
        this.height =
          this.height === "价格排序"
            ? "价格最低"
            : this.height === "价格最低"
            ? "价格最高"
            : "价格最低";
      } else {
        this.height = "价格排序";
      }
    },
  },

  created() {
    //因为后端返回的数据量有限,所以不使用后端的数据
    axios.productsSearched().then((shuju) => {
      console.log(shuju);
    });
  },
};
</script>


<style scoped>
@import url("../../../assets/css/smallIcons/lcon1.css");
@import url("../../../assets/css/Product/left/bottom.css");
@import url("../../../assets/css/smallIcons/ditu.css");
</style>