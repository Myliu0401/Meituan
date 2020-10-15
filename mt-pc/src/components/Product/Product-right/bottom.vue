<template>
  <div class="bottom11">
    <div class="title">猜你喜欢的</div>
    <div
      class="Myzhuti"
      v-for="ele in RecommendedProductData"
      :key="ele.itemId"
    >
      <div class="My">
        <div class="img">
          <img :src="ele.imgUrl" alt="图片" />
        </div>
        <div class="xinxi">
          <p class="p">{{ ele.title }}</p>
          <div class="xinhui">
            <div class="Myxingxing">
              <ul
                v-for="indexI in 2"
                :key="indexI"
                :class="{ miA: indexI !== 1 }"
              >
                <li v-for="indexN in 5" :key="indexN" class="mixin"></li>
              </ul>
            </div>
            <span class="span">{{ ele.commentNum + "个评价" }}</span>
          </div>
          <div class="misi2">{{ ele.areaName }}</div>
          <div class="qian">
            <span class="s1">¥</span>
            <span class="s2">{{ ele.lowPrice }}</span>
            <span class="s3">{{ "起" }}</span>
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
      RecommendedProductData: [],
      PictureData: [
        "//p0.meituan.net/msmerchant/9036e931509f303c184fe5243ac05eb987341.jpg@237w_132h_1e_1c",
        "//p1.meituan.net/dpmerchantpic/55452195ae7584a3872eff896cbb18d154814.jpg@237w_132h_1e_1c",
        "//p0.meituan.net/merchantpic/6c7ce236366ce9a6c379c7b8bfd47b471310967.jpg@237w_132h_1e_1c",
        "//p1.meituan.net/bbia/3248304_1594032615112.jpeg@237w_132h_1e_1c",
        "//p0.meituan.net/bbia/215d7b656265514a94444ee5c2a15b0c98364.jpg@237w_132h_1e_1c",
        "//p1.meituan.net/msmerchant/cd32b5b500d967422986acda59a8318c1081194.jpg@237w_132h_1e_1c",
        "//p0.meituan.net/msmerchant/a4eb1339d66585c21da763bd4a42fd2f179420.jpg@237w_132h_1e_1c",
        "//p1.meituan.net/bbia/f45def254f2905f798280eca3058f6fb5545821.jpg@237w_132h_1e_1c",
        "//p1.meituan.net/msmerchant/ab744d54f28a301b4aa54c224be8d969308778.jpg@237w_132h_1e_1c",
        "//p0.meituan.net/mogu/28b512d1e36ca274b14d7a65a8d8b85287082.jpg@237w_132h_1e_1c",
      ],
    };
  },
  created() {
    axios.ListOfRecommendedProducts().then((shuju) => {
      console.log(shuju.data, "推崇的产品");
      //因为后端图片数据,错误所以改图片地址
      shuju.data.forEach((el, index) => {
        el.imgUrl = this.PictureData[index];
      });
      this.RecommendedProductData = shuju.data;
    });
  },
};
</script>


<style scoped>
@import url("../../../assets/css/smallIcons/lcon1.css");
@import url("../../../assets/css/Product/right/bottom.css");
</style>