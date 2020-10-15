<template>
  <div class="MainB1">
    <div class="top" v-for="ele in filmArr" :key="ele.title">
      <div class="left">
        <span>{{ ele.title }}</span>
        <span
          v-for="(ele1,index) in ele.subList"
          :key="ele1.name"
          class="t1"
          :class="{misi:indexClass===index}"
          @mouseenter="jinru(index)"
        >{{ ele1.name }}</span>
      </div>
      <div class="right">
        <span>全部</span>
        <i></i>
      </div>
    </div>

    <div class="bottom">
      <ul
        v-for="ele in filmArr"
        :key="ele.id"
        :style="{width:ulWidth + 'px',left:motionArr[indexClass].left+'px',transition:motionArr[indexClass].transition}"
      >
        <li v-for="ele1 in ele.subList[indexClass].SublistData" :key="ele1.id">
          <img :src="ele1.url" :alt="ele1.name" />
          <img :src="ele1.url1" />
          <div class="bottom1">
            <div class="b1">
              <span
                :class="{misinai:typeof(ele1.audience)==='number',naisi:typeof(ele1.audience)==='string'}"
              >{{ ele1.audience }}</span>
              <span
                :class="{misinai:typeof(ele1.score)==='number',naisi:typeof(ele1.score)==='string'}"
              >{{ ele1.score }}</span>
            </div>
            <div class="b2">
              <span>{{ ele1.name }}</span>
              <span>{{ ele1.piao }}</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="bottomA">
        <span class="left" @click="dianji('left')">
          <i></i>
        </span>
        <span class="right" @click="dianji('right')">
          <i></i>
        </span>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      //模拟后端猫眼电影区域的数据----top区域
      filmArr: [
        {
          title: "猫眼电影",
          subList: [
            {
              id: Math.random(),
              name: "正在热映",
              SublistData: [
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/moviemachine/40d1e5ac176f1e9258da10a3222dbff7952117.png@267w_371h_1e_1c",
                  audience: "观众评",
                  score: 8.3,
                  url1:
                    "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
                  name: "信条",
                  piao: "购票",
                },

                {
                  id: Math.random(),
                  url:
                    "//p0.meituan.net/moviemachine/a448ca6a5f4dafb88067722303ca0cfd96002.jpg@267w_371h_1e_1c",
                  audience: "观众评",
                  score: 9.2,
                  url1:
                    "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
                  name: "八佰",
                  piao: "购票",
                },
                {
                  id: Math.random(),
                  url:
                    "//p0.meituan.net/moviemachine/ca9d0c0268a940d73d62c004d57b957a5241814.jpg@267w_371h_1e_1c",
                  audience: "观众评",
                  score: 7.5,
                  url1:
                    "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
                  name: "花木兰",
                  piao: "购票",
                },
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/movie/988ab3d3a50f51f31d090e84da88d5ae3461853.jpg@267w_371h_1e_1c",
                  audience: 502387,
                  score: "人想看",
                  url1:
                    "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
                  name: "夺冠",
                  piao: "购票",
                },
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/movie/9ce80d2aa1aec49b7f999305c237bace2082932.jpg@267w_371h_1e_1c",
                  audience: "观众评",
                  score: 8.3,
                  url1: null,
                  name: "死无对证",
                  piao: "购票",
                },
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/movie/374f7addeb978a634b0f5e8665f0bce4357962.jpg@267w_371h_1e_1c",
                  audience: "观众评",
                  score: 8.3,
                  url1: null,
                  name: "麦路人",
                  piao: "购票",
                },
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/movie/4dc7bde9dbdbb73ecd9b14d2752d17c43681386.jpg@267w_371h_1e_1c",
                  audience: "观众评",
                  score: 8.3,
                  url1: null,
                  name: "萌宠流浪记",
                  piao: "购票",
                },
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/movie/1818ce14669a901792c052caf048475a640420.jpg@267w_371h_1e_1c",
                  audience: "观众评",
                  score: 7.9,
                  url1: null,
                  name: "假面饭店",
                  piao: "购票",
                },
                {
                  id: Math.random(),
                  url:
                    "//p0.meituan.net/moviemachine/bbedacda94dde6d1e62379abc1258e9c231479.jpg@267w_371h_1e_1c",
                  audience: "观众评",
                  score: 8.8,
                  url1: null,
                  name: "邻里美好的一天",
                  piao: "购票",
                },
                {
                  id: Math.random(),
                  url:
                    "//p0.meituan.net/movie/0bd752877b95b8eac2d0704c783f372c4625354.jpg@267w_371h_1e_1c",
                  audience: 18865,
                  score: "人想看",
                  url1: null,
                  name: "菊次郎的夏天",
                  piao: "预售",
                },
              ],
            },
            {
              id: Math.random(),
              name: "即将上映",
              SublistData: [
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/movie/f734a8ed47d09c64e25490889add3a70622450.jpg@267w_371h_1e_1c",
                  audience: 20,
                  score: "人想看",
                  url1: null,
                  name: "朝颜",
                  piao: "预售",
                },
                {
                  id: Math.random(),
                  url:
                    "//p0.meituan.net/movie/9df8f5f12f8486e459760c20503b7822327413.jpg@267w_371h_1e_1c",
                  audience: 26,
                  score: "人想看",
                  url1: null,
                  name: "世纪之缘",
                  piao: "预售",
                },
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/movie/988ab3d3a50f51f31d090e84da88d5ae3461853.jpg@267w_371h_1e_1c",
                  audience: 502387,
                  score: "人想看",
                  url1:
                    "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
                  name: "夺冠",
                  piao: "预售",
                },
                {
                  id: Math.random(),
                  url:
                    "//p0.meituan.net/movie/d1a953193e001c8dec96c17ea5075ec0788729.jpg@267w_371h_1e_1c",
                  audience: 259124,
                  score: "人想看",
                  url1:
                    "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png",
                  name: "急先锋",
                  piao: "预售",
                },
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/moviemachine/da8024493c8142c0949f8b72d43934c0351577.jpg@267w_371h_1e_1c",
                  audience: 1291785,
                  score: "人想看",
                  url1: "//s0.meituan.net/bs/fe-web-meituan/9d1997a/img/3d.png",
                  name: "姜子牙",
                  piao: "预售",
                },
                {
                  id: Math.random(),
                  url:
                    "//p0.meituan.net/movie/202ea88abd2abf2aa1964487d61edab64556414.jpg@267w_371h_1e_1c",
                  audience: 319809,
                  score: "人想看",
                  url1:
                    "//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png",
                  name: "我和我的家乡",
                  piao: "预售",
                },
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/movie/84a2c5e0959ac2d625039690553c19d1454744.jpg@267w_371h_1e_1c",
                  audience: 175619,
                  score: "人想看",
                  url1: null,
                  name: "花木兰:横空出世",
                  piao: "预售",
                },
                {
                  id: Math.random(),
                  url:
                    "//p1.meituan.net/moviemachine/cbe423e7511c6ee1b19034550ea782452468297.jpg@267w_371h_1e_1c",
                  audience: 24563,
                  score: "人想看",
                  url1: null,
                  name: "一点就到家",
                  piao: "预售",
                },
                {
                  id: Math.random(),
                  url:
                    "//p0.meituan.net/moviemachine/f874ee5dfd33d15b168fb89dfcb74fe72467810.jpg@267w_371h_1e_1c",
                  audience: 117,
                  score: "人想看",
                  url1: null,
                  name: "云做的翅膀",
                  piao: "预售",
                },
              ],
            },
          ],
        },
      ],

      indexClass: 0,

      //每个li元素的宽度
      liwidth: 214,
      //每个li元素的margin值
      marginRight: 19,

      //用于存储电影列表的子列表对应的运动数据
      motionArr: [],
    };
  },

  methods: {
    jinru(i) {
      this.indexClass = i;
      const shuju = this.motionArr[this.indexClass];
      shuju.transition = "";
    },

    //点击电影列表左右的按键执行的处理函数
    dianji(fanxian) {
      //判断窗口宽度
      const mi = this.$store.state.Width;

      //获取对应的电影子列表数量
      const shulian = this.filmArr[0].subList[this.indexClass].SublistData
        .length;

      //获取对应的电影子列表的运动数据
      const shuju = this.motionArr[this.indexClass];

      //设置运动时间
      shuju.transition = "left 1.5s, right 1.5s";

      shuju.LastTime = mi === 900 ? 4 : 5;
      if (fanxian === "left") {
        if (shuju.numindex === shulian - shuju.LastTime) {
          return;
        }
        if (shuju.numindex + shuju.LastTime <= shulian - shuju.LastTime) {
          shuju.left +=
            -shuju.LastTime * this.liwidth + -shuju.LastTime * this.marginRight;
          shuju.numindex += shuju.LastTime;
        } else {
          const num = shulian % (shuju.numindex + shuju.LastTime);
          shuju.left += -num * this.liwidth + -num * this.marginRight;
          shuju.numindex += num;
        }
      } else {
        if (shuju.numindex === 0) {
          return;
        }
        let a;
        if (shulian >= shuju.numindex + shuju.LastTime) {
          a = (shuju.numindex + shuju.LastTime) % shuju.LastTime;
        } else {
          a = (shuju.numindex + shuju.LastTime) % shulian;
        }
        if (!a) {
          shuju.left +=
            shuju.LastTime * this.liwidth + shuju.LastTime * this.marginRight;
          shuju.numindex -= shuju.LastTime;
        } else {
          shuju.left += a * this.liwidth + a * this.marginRight;
          shuju.numindex -= a;
        }
      }
    },
  },

  computed: {

    //用于生成ul标签的总宽度
    ulWidth() { 
      let misi = this.filmArr[0].subList[this.indexClass].SublistData.length;
      return misi * this.liwidth + misi * this.marginRight;
    },
  },

  created() {
    //向motionArr属性添加,电影列表的不同子列表的运动数据
    this.filmArr[0].subList.forEach((ele, index) => {
      this.motionArr.push({
        //最开始的状态
        left: 0, //对应ul标签的位置
        transition: "", //运动秒数
        numindex: 0, //索引状态便于操作
        LastTime: 0, //用于存储当前尺寸对应的数量
      });
    });
  },
};
</script>



<style scoped>
@import url("../../../assets/css/Main/MainB/mainB-1.css");
/* .MainB1 {
    box-sizing: border-box;
    margin-top: 40px;
  }
  .MainB1 .top {
    width: 100%;
    height: 44px;
    background: linear-gradient(
        to right,
        rgb(250, 60, 104) 2%,
        rgb(254, 70, 77) 97%
      )
      rgb(250, 60, 104);
    color: #fff;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-sizing: border-box;
    padding: 0px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }
  .MainB1 .bottom {
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    padding: 0px 12px;
  }
  
  .MainB1 .bottom .bottomA {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 12px;
  }
  
  .MainB1 .bottom .bottomA span {
    width: 40px;
    height: 40px;
    background: #333;
    z-index: 99;
    border-radius: 40px;
    opacity: 0;
    transition: opacity 0.5s;
    transform: scale(0.95);
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    position: relative;
  }
  
  .MainB1 .bottom .bottomA span i {
    width: 15px;
    height: 15px;
    display: inline-block;
    top: 42%;
    position: relative;
    box-sizing: border-box;
    border-bottom: 2px solid rgba(250, 249, 249, 0.5);
  }
  
  .MainB1 .bottom .bottomA span:first-of-type i {
    border-left: 2px solid rgba(250, 249, 249, 0.5);
    transform: rotate(45deg) translateY(-50%);
    left: -2px;
  }
  
  .MainB1 .bottom .bottomA span:last-of-type i {
    border-right: 2px solid rgba(250, 249, 249, 0.5);
    transform: rotate(-45deg) translateY(-50%);
    right: -2px;
  }
  
  .MainB1 .bottom:hover {
    cursor: pointer;
  }
  
  .MainB1 .bottom:hover .bottomA span {
    transition: opacity 0.5s;
    opacity: 0.7;
  }
  
  .MainB1 .bottom .bottomA span:hover i {
    border-color: #fff;
  }
  
  p {
    height: 50px;
    width: 10px;
  }
  
  .MainB1 .top .left span:first-of-type {
    font-size: 18px;
    font-family: "ElegantStyle";
    margin-right: 15px;
    box-sizing: border-box;
  }
  
  .MainB1 .top .left span {
    box-sizing: border-box;
    margin-right: 10px;
  }
  
  .MainB1 .top .left .t1 {
    position: relative;
  }
  
  .MainB1 .top .left .t1:hover {
    cursor: pointer;
  }
  
  .MainB1 .top .left .t1.misi::before {
    position: absolute;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 7px solid #fff;
    content: " ";
    display: block;
    width: 2px;
    height: 0;
    top: 26px;
    left: 0;
    right: 0;
    margin: auto;
  }
  
  .MainB1 .top .right i {
    width: 7px;
    height: 7px;
    display: inline-block;
    margin-left: 2px;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    transform: rotate(-45deg);
    top: -2px;
    position: relative;
  }
  
  .MainB1 .top .right:hover {
    cursor: pointer;
  }
  
  .MainB1 .bottom ul {
    display: flex;
    position: relative;
    top: 1px;
    box-sizing: border-box;
  }
  
  .MainB1 .bottom ul li {
    width: 214px;
    height: 297px;
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-right: 19px;
  }
  
  .MainB1 .bottom ul li img:first-of-type {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
  
  .MainB1 .bottom ul li img:last-of-type {
    position: absolute;
    top: 10px;
    z-index: 99;
    left: -6px;
    height: 20px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
    width: auto;
    border: 0px;
  }
  
  .MainB1 .bottom .bottom1 {
    color: #fff;
    box-sizing: border-box;
    padding-bottom: 10px;
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(29, 45, 55, 0.8) 99%
    );
  }
  
  .MainB1 .bottom .bottom1 .b2 span:first-of-type {
    text-align: left;
    color: #fff;
    padding-left: 10px;
    font-size: 16px;
    white-space: nowrap;
    width: 6em;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 500;
    display: inline-block;
  }
  
  .MainB1 .bottom .bottom1 .b1,
  .MainB1 .bottom .bottom1 .b2 {
    width: 100%;
    display: flex;
    align-items: center;
    padding-right: 10px;
    box-sizing: border-box;
  }
  
  .MainB1 .bottom .bottom1 .b1 {
    padding-left: 10px;
    padding-top: 48px;
  }
  
  .MainB1 .bottom .bottom1 .b2 {
    justify-content: space-between;
  }
  
  .MainB1 .bottom .bottom1 .b2 span:last-of-type {
    color: rgb(255, 255, 255);
    font-size: 14px;
    cursor: pointer;
    line-height: 20px;
    text-align: center;
    float: right;
    right: 10px;
    background: rgb(255, 73, 73);
    border-radius: 100px;
    padding: 2px 12px 3px;
  }
  
  .misinai {
    font-size: 16px;
    color: #fd9827;
    font-weight: 500;
  }
  .naisi {
    font-size: 12px;
    padding: 0px 2px;
    font-weight: 500;
  } */
  
/*   @font-face {
    font-family: "ElegantStyle"; */
   /*  "../../../assets/字体/华康翩翩.ttf" */
   /*  "../../../assets/字体/【开开】晚安体.ttf" */
    /* src: url("../../../字体/华康翩翩.ttf"); */
    /* src: url("../../../assets/字体/华康翩翩.ttf"); */
 /*  } */
  
  /* @font-face {
    font-family: "GoodNight"; */
    /* src: url("../../../字体/【开开】晚安体.ttf"); */
   /*  src: url("../../../assets/字体/【开开】晚安体.ttf");
  } */
</style>