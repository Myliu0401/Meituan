<template>
  <div class="MainB4">
    <div class="top">美团导航</div>
    <div class="nav">
      <div class="n1" v-for="(ele, index) in Navigation" :key="index">
        <div class="nA">{{ ele.title }}</div>
        <div class="nB">
          <span v-for="ele1 in ele.datas" :key="ele1.id">
            {{ ele1.city }}
            <i v-if="ele1.is">HOT</i>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      //模拟后端数据
      Navigation: [
        {
          title: "热门城市",
          id: Math.random(),
          datas: [
            { city: "宁波", is: false },
            { city: "广州", is: false },
            { city: "成都", is: false },
            { city: "南京", is: false },
            { city: "西安", is: false },
            { city: "郑州", is: false },
            { city: "贵阳", is: false },
            { city: "合肥", is: false },
            { city: "南宁", is: false },
            { city: "深圳", is: false },
            { city: "福州", is: false },
            { city: "厦门", is: false },
            { city: "常州", is: false },
            { city: "哈尔滨", is: false },
            { city: "青岛", is: false },
            { city: "石家庄", is: false },
            { city: "武汉", is: false },
            { city: "温州", is: false },
            { city: "大连", is: false },
            { city: "东莞", is: false },
          ],
        },
        {
          title: "热门分类",
          id: Math.random(),
          datas: [
            { city: "酒店", is: true },
            { city: "美食", is: false },
            { city: "休闲娱乐", is: false },
            { city: "运动健身", is: false },
            { city: "生活服务", is: false },
            { city: "上门服务", is: false },
            { city: "购物", is: false },
            { city: "时尚购", is: false },
            { city: "本地购物", is: false },
            { city: "结婚", is: false },
            { city: "摄影写真", is: false },
            { city: "宴会", is: false },
            { city: "丽人", is: false },
            { city: "母婴亲子", is: false },
            { city: "学习培训", is: false },
            { city: "家装", is: false },
            { city: "汽车服务", is: false },
            { city: "医疗", is: false },
            { city: "宠物", is: false },
          ],
        },
        {
          title: "周边热门",
          id: Math.random(),
          datas: [
            { city: "喜来登酒店", is: false },
            { city: "太仓美食", is: false },
            { city: "太仓休闲娱乐", is: false },
            { city: "宜兰生活服务", is: false },
            { city: "太仓美食", is: false },
            { city: "宜兰运动健身", is: false },
            { city: "太仓上门服务", is: false },
            { city: "彰化购物", is: false },
            { city: "彰化时尚购", is: false },
            { city: "太仓本地购物", is: false },
            { city: "彰化结婚", is: false },
            { city: "彰化摄影写真", is: false },
            { city: "宜兰宴会", is: false },
            { city: "彰化丽人", is: false },
            { city: "太仓母婴写真", is: false },
            { city: "太仓学习培训", is: false },
            { city: "宜兰家装", is: false },
            { city: "太仓汽车服务", is: false },
            { city: "太仓医疗", is: false },
            { city: "宜兰宠物", is: false },
          ],
        },
      ],
    };
  },
};
</script>


<style scoped>
@import url("../../../assets/css/Main/MainB/mainB-4.css");
</style>