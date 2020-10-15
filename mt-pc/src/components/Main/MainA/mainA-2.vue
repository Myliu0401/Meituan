<template>
  <div class="mainA2">
    <div class="top">
      <h4 v-for="(ele,index) in topArr" :key="index">{{ ele }}</h4>
    </div>
    <div class="rotationChart" @mouseover="jinru" @mouseleave="likai">
      <ul
        :style="{width:totalWidthOfRotationChart + 'px',left:motionObj.left +'px',transition:motionObj.transition}"
        @transitionend="complete"
      >
        <li
          v-for="(ele,index) in rotationChart"
          :key="index"
          :style="{
               backgroundImage:ele.url,
           }"
        ></li>
      </ul>
      <div class="Smaller">
        <span
          v-for="index1 in num"
          :key="index1"
          :class="{Select:Indexes===index1-1||Indexes===num&&index1===1||Indexes===-1&&index1===num}"
          @click="dianji(index1)"
        ></span>
      </div>
      <div class="about">
        <span class="left" @click="myclick('left')">
          <i></i>
        </span>
        <span class="right" @click="myclick('right')">
          <i></i>
        </span>
      </div>
    </div>
    <div class="bottom">
      <div v-for="ele in bottomArr" :key="ele.id" class="b1">
        <div :style="{backgroundImage:ele.url}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mywidth: {
      type: [Number, String],
      default: 550,
      required: true,
    },
  },
  data() {
    return {
      //轮播图上方的导航数据
      topArr: [
        "美团外卖",
        "猫眼电影",
        "美团酒店",
        "民宿/公寓",
        "商家入驻",
        "美团公益",
      ],

      //轮播图数据
      rotationChart: [
        {
          url:
            "url(http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg)",
          id: Math.random(),
        },
        {
          url:
            "url(http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg)",
          id: Math.random(),
        },
        {
          url:
            "url(http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg)",
          id: Math.random(),
        },
        {
          url:
            "url(http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg)",
          id: Math.random(),
        },
        {
          url:
            "url(https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png)",
          id: Math.random(),
        },
      ],

      //轮播图容器总宽度
      totalWidthOfRotationChart: null,

      //最开始轮播图的数量,没有补充前,方便轮播图操作
      num: null,

      //轮播图运动的数据
      motionObj: {
        left: -this.mywidth,
        transition: "left right 2s",
      },

      //索引,用来操作轮播图切换
      Indexes: 0,

      //轮播图的计时器编号
      tiem: null,

      //用于轮播图移入移除
      misinai: true,

      //轮播图下方的div的数据
      bottomArr: [
        {
          url:
            "url(http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png",
          id: Math.random(),
        },
        {
          url:
            "url(http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg",
          id: Math.random(),
        },
      ],
    };
  },
  created() {
    //赋值 this.num
    this.num = this.rotationChart.length;

    //添加轮播图数据
    const arr = this.rotationChart;
    arr.splice(0, 0, arr[arr.length - 1]);
    arr.push(arr[1]);
    this.rotationChart = arr;

    //================================//
    this.totalWidthOfRotationChart = this.rotationChart.length * this.mywidth; //轮播图容器总宽度
  },
  mounted() {
    this.motion();
  },
  computed: {},
  watch: {
    //侦听mywidth数据的变化
    mywidth() {
      this.motionObj.left = -((this.Indexes + 1) * this.mywidth);
      this.motionObj.transition = "";
      this.totalWidthOfRotationChart = this.rotationChart.length * this.mywidth;
      setTimeout(() => {
        this.motion();
      });
    },
  },
  methods: {
    //最开始执行的
    motion() {
      clearTimeout(this.tiem);
      this.tiem = setTimeout(() => {
        this.Indexes++;
        this.motionObj.left += -this.mywidth;
        this.motionObj.transition = "left 2s, right 2s";
        this.Indexes === this.num ? (this.Indexes = 0) : "";
      }, 2000);
    },

    //轮播图运动完时执行
    complete() {
      if (!this.misinai) {
        return;
      }

      const Left = (this.rotationChart.length - 1) * this.mywidth;
      //判断轮播图最尾有没有越进右边界
      if (this.motionObj.left === -Left) {
        this.motionRedundancy("left");
      } else if (this.motionObj.left === 0) {
        this.motionRedundancy("right");
      }
      this.motion();
    },

    //点击轮播图时执行的函数
    myclick(misi) {
      clearTimeout(this.tiem);
      if (misi === "left") {
        if (this.Indexes === this.num) {
          this.handlingRedundancy("left");
        } else {
          this.clickRedundancy("left");
        }
      } else {
        if (this.Indexes === -1) {
          this.handlingRedundancy("right");
        } else {
          this.clickRedundancy("right");
        }
      }
    },

    //处理轮播图点击左右时的冗余代码---判断处理边界
    handlingRedundancy(direction) {
      let mixins;
      direction === "left" ? (mixins = -this.mywidth) : (mixins = this.mywidth);
      direction === "left" ? (this.Indexes = 0) : (this.Indexes = this.num - 1);
      direction === "left"
        ? (this.motionObj.left = mixins)
        : (this.motionObj.left = -(this.rotationChart.length - 2) * mixins);
      this.motionObj.transition = "";
      setTimeout(() => {
        this.myclick(direction);
      });
    },

    //处理轮播图点击左右时的冗余代码---判断左右
    clickRedundancy(direction) {
      direction === "left" ? this.Indexes++ : this.Indexes--;
      direction === "left"
        ? (this.motionObj.left += -this.mywidth)
        : (this.motionObj.left += this.mywidth);
      this.motionObj.transition = "left 0.5s, right 0.5s";
    },

    //处理运动结束时处理函数的里边界判断的冗余代码
    motionRedundancy(direction) {
      direction === "left"
        ? (this.motionObj.left = -this.mywidth)
        : (this.motionObj.left =
            -(this.rotationChart.length - 2) * this.mywidth);
      direction === "left" ? (this.Indexes = 0) : (this.Indexes = this.num - 1);
      this.motionObj.transition = "";
      setTimeout(() => {
        this.motion();
        this.motionObj.transition = "left 2s,right 2s";
      });
    },

    //点击轮播图下方的小点
    dianji(index) {
      clearTimeout(this.tiem);
      this.Indexes = index - 1;
      this.motionObj.left = -(this.Indexes + 1) * this.mywidth;
      this.motionObj.transition = "left 0.5s, right 0.5s";
    },

    //鼠标移入轮播图最外层容器时的处理函数
    jinru() {
      clearTimeout(this.tiem);
      this.misinai = false;
    },

    //鼠标离开轮播图最外层容器时的处理函数
    likai() {
      this.misinai = true;
      this.motion();
    },
  },
};
</script>

<style scoped>
@import url("../../../assets/css/Main/MainA/MainA-2.css");
</style>