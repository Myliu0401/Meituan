<template>
  <div class="mianA1">
    <div class="title">
      <h4>全部分类</h4>
    </div>
    <div class="leftMainBody">
      <div
        v-for="(ele,index) in NavigationArr"
        :key="index"
        :data-type="ele.type"
        class="leftbiao"
        :class="{'is':ele.is}"
        @mouseleave="remove"
        @mouseenter="moveIn(ele.items)"
      >
        <i :class="ele.type" class="iconfont"></i>
        <span>
          <span class="ziti" v-for="(ele1,index1) in ele.names" :key="index1">
            {{ ele1 }}
            <!-- 如果不使用i元素,直接将/拼接在span元素中,就使用这个逻辑
              {{ ele.names.length>1 ? index1===ele.names.length-1 ? ele1 : ele1+'/':ele1 }} 
            -->
            <i v-if="ele.names.length>1 && index1!==ele.names.length-1">{{'/'}}</i>
          </span>
        </span>
        <span v-if="ele.is" class="hot">HOT</span>
        <i class="right"></i>
      </div>
    </div>
    <div class="Secondary" v-if="Secondary.length" @mouseleave="likai">
      <div class="SA" v-for="(ele,index) in Secondary" :key="index">
        <div class="S1">
          <h5>{{ ele.title }}</h5>
          <span>
            更多
            <i></i>
          </span>
        </div>
        <div class="S2">
          <span v-for="(ele1,index1) in ele.items" :key="index1">{{ ele1 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import ajax from "../../../http.js";
export default {
  data() {
    return {
      //模拟请求来的左侧导航数据
      NavigationArr: [
        {
          items: [
            {
              items: [
                "代金券",
                "甜点饮品",
                "火锅",
                "自助餐",
                "小吃快餐",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉",
                "东北菜",
                "川湘菜",
                "江浙菜",
                "香锅烤鱼",
                "粤港菜",
                "中式烧烤/烤串",
                "西北菜",
                "咖啡酒吧茶馆",
                "云贵菜",
                "东南亚菜",
                "海鲜",
                "素食",
                "台湾/客家菜",
                "创意菜",
                "汤/粥/炖菜",
                "蒙餐",
                "新疆菜",
                "其他美食",
                "京菜鲁菜",
              ],
              title: "美食",
            },
          ],
          names: ["美食"],
          type: "food",
          is: false,
        },
        {
          items: [{ items: ["美团外卖"], title: "外卖" }],
          names: ["外卖"],
          type: "takeoutfood",
          is: false,
        },
        {
          items: [
            {
              items: ["经济", "型舒适/三星", "高档/四星", "豪华/五星"],
              title: "酒店星级",
            },
          ],
          names: ["酒店"],
          type: "hotel",
          is: true,
        },
        {
          items: [
            {
              items: [
                "上海",
                "成都",
                "北京",
                "重庆",
                "南京",
                "杭州",
                "广州",
                "西安",
                "武汉",
                "厦门",
                "长沙",
                "青岛",
                "深圳",
                "天津",
                "苏州",
              ],
              title: "热门城市",
            },
            {
              items: ["复式Loft", "别墅"],
              title: "热门房源",
            },
          ],
          names: ["民宿"],
          type: "mingshu",
          is: false,
        },
        {
          items: [
            {
              items: [
                "信条",
                "八佰",
                "花木兰",
                "夺冠",
                "死无对证",
                "麦路人",
                "邻里美好的一天",
                "蓝色防线",
                "通往春天的列车",
                "假面饭店",
              ],
              title: "热映电影",
            },
            {
              items: [
                "SFC上影影城",
                "万达影城",
                "大地影院",
                "百丽宫影城",
                "CGV影城",
                "星美国际影城",
                "橙天嘉禾影城",
                "横店电影城",
                "博纳国际影城",
                "大光明电影院",
              ],
              title: "热门影院",
            },
          ],
          names: ["猫眼电影"],
          type: "film",
          is: false,
        },
        {
          items: [
            { items: ["国内机票", "国际/港澳台机票"], title: "机票" },
            { items: ["火车票"], title: "火车票" },
          ],
          names: ["机票", "火车票"],
          type: "ticket",
          is: false,
        },
        {
          items: [
            {
              items: [
                "足疗",
                "按摩",
                "洗浴/汗蒸",
                "酒吧",
                "密室逃脱",
                "轰趴馆",
                "茶馆",
                "私人影院",
                "DIY手工坊",
                "采摘/农家",
                "乐网吧网",
                "咖游",
                "乐游艺",
                "VR桌面游戏",
                "真人CS",
                "棋牌室",
                "其他玩乐",
              ],
              title: "休闲娱乐",
            },
            {
              items: ["KTV"],
              title: "KTV",
            },
          ],
          names: ["休闲娱乐", "KTV"],
          type: "ment",
          is: false,
        },
        {
          items: [
            {
              items: [
                "衣物/皮具",
                "洗护",
                "家政",
                "搬家运输",
                "送水",
                "充值缴费",
                "服饰/鞋包养护",
                "开锁换锁",
                "居家",
                "维修管道",
                "疏通",
                "家电维修",
                "清洗电脑",
                "维修手机",
                "维修证件照/肖像摄影",
                "照片冲印/图文文印",
                "商务服务/法律服务",
                "文化传媒机构",
                "成人用品/情趣用品",
              ],
              title: "生活服务",
            },
          ],
          names: ["生活服务"],
          type: "service",
          is: false,
        },
        {
          items: [
            {
              items: [
                "美发",
                "美甲",
                "美睫",
                "美容",
                "美体医学",
                "美容瑜伽",
                "舞蹈瘦身",
                "纤体韩式",
                "定妆",
                "祛痘",
                "纹身",
                "化妆品",
                "养发",
              ],
              title: "丽人",
            },
          ],
          names: ["丽人", "美发", "医学美容"],
          type: "beauty",
          is: false,
        },
        {
          items: [
            {
              items: [
                "婚纱摄影",
                "旅拍个性写真",
                "婚宴",
                "婚庆",
                "公司婚纱礼服",
                "西服定制",
                "婚戒首饰",
                "婚车租赁",
                "司仪主持",
                "彩妆造型",
                "婚礼跟拍",
                "婚礼小礼品",
                "更多婚礼服务",
              ],
              title: "结婚",
            },
          ],
          names: ["结婚", "婚纱摄影", "婚宴"],
          type: "marry",
          is: false,
        },
        {
          items: [
            { items: ["婴儿游泳", "其它亲子游乐"], title: "儿童乐园" },
            {
              items: [
                "早教中心",
                "少儿英语",
                "智力开发",
                "托班/幼儿园",
                "幼儿教育",
                "其他幼儿教育",
              ],
              title: "幼儿教育",
            },
            {
              items: ["儿童摄影", "孕妇写真", "上门拍", "其他亲子摄影"],
              title: "亲子摄影",
            },
            {
              items: [
                "月子会所",
                "产后恢复",
                "妇幼医院",
                "孕产用品",
                "开奶催乳",
                "月嫂亲子",
                "购物宝宝",
                "派对亲子服务",
              ],
              title: "孕产护理",
            },
          ],
          names: ["亲子", "儿童乐园", "幼教"],
          type: "Parenting",
          is: false,
        },
        {
          items: [
            {
              items: [
                "健身中心",
                "武术场馆",
                "游泳馆",
                "羽毛球馆",
                "溜冰场",
                "射箭馆",
                "篮球场",
                "网球馆",
                "台球馆",
                "乒乓球",
                "足球场",
                "高尔夫场",
                "保龄球馆",
                "体育场馆",
                "马术场",
                "壁球馆",
                "更多运动",
              ],
              title: "运动健身",
            },
          ],
          names: ["运动健身", "健身中心"],
          type: "motion",
          is: false,
        },
        {
          items: [
            { items: ["半包装修", "全包装修", "清包装修"], title: "装修设计" },
            {
              items: [
                "地板瓷砖",
                "石材橱",
                "柜灯",
                "饰照明",
                "厨卫洁具",
                "油漆涂料",
                "集成吊顶",
                "墙纸",
                "墙艺门",
                "窗木材板材",
                "家用五金",
                "电工电料",
                "楼梯管",
                "材管件",
              ],
              title: "装修建材",
            },
            {
              items: [
                "家具",
                "床上用品/家纺",
                "家居饰品",
                "厨具餐具",
                "智能家居",
              ],
              title: "家具家居",
            },
            { items: ["建材卖场", "家居卖场", "灯饰卖场"], title: "家装卖场" },
          ],
          names: ["家装", "建材", "家居"],
          type: "renovation",
          is: false,
        },
        {
          items: [
            {
              items: [
                "钢琴",
                "吉他",
                "小提琴",
                "古筝",
                "架子鼓",
                "声乐",
                "其他音乐培训",
              ],
              title: "音乐培训",
            },
            {
              items: [
                "美容",
                "化妆",
                "会计",
                "IT",
                "厨艺",
                "管理培训",
                "摄影培训",
                "司法考试",
                "公务员培训",
                "其他职业培训",
              ],
              title: "职业技术",
            },
            {
              items: [
                "英语",
                "日语",
                "韩语",
                "法语",
                "德语",
                "汉语",
                "俄语",
                "西班牙",
                "语其他外语",
              ],
              title: "外语培训",
            },
            {
              items: ["绘画", "书法", "其他美术"],
              title: "美术培训",
            },
          ],
          names: ["学习培训", "音乐培训"],
          type: "study",
          is: false,
        },
        {
          items: [
            {
              items: [
                "医院",
                "齿科口腔",
                "体检中心",
                "药店",
                "中医",
                "其他健康服务",
              ],
              title: "医疗健康",
            },
            {
              items: [
                "洗车",
                "租车",
                "加油站",
                "维修保养",
                "驾校",
                "汽车美容",
                "陪练",
                "汽车用品",
                "停车场",
                "汽车保险",
                "4S店/汽车销售",
                "更多汽车服务",
                "机油保养",
                "汽车报价",
                "二手车",
                "广告驾校",
                "交警队",
                "汽车改装",
                "汽车配件",
              ],
              title: "爱车",
            },
            {
              items: ["宠物店", "宠物医院"],
              title: "宠物",
            },
          ],
          names: ["医疗健康", "宠物", "爱车"],
          type: "medical",
          is: false,
        },
        {
          items: [
            {
              items: [
                "KTV",
                "酒吧",
                "密室逃脱",
                "游乐游艺",
                "网吧网咖",
                "私人影院",
                "DIY手工坊",
                "桌面游戏",
                "采摘/农家乐",
                "棋牌室",
                "轰趴馆",
                "真人CSVR",
                "其他玩乐",
              ],
              title: "玩乐",
            },
          ],
          names: ["酒吧", "密室逃脱"],
          type: "bar",
          is: false,
        },
      ],
      Secondary: [],
    };
  },
  methods: {
    moveIn(data) {
      this.Secondary = data;
    },
    remove() {
      const secondLevel = event.relatedTarget;
      if(!secondLevel){
        this.Secondary = [];
        return;
      }
      if (
        !(secondLevel.classList.contains("Secondary") ||secondLevel.classList.contains("SA"))
      ) {
        this.Secondary = [];
      }
    },
    likai(){
      this.Secondary = [];
    }
  },
  created() {
    ajax.leftNavigation().then((shuju) => {
      //由于请求左侧导航数据,后端返回来不完整,放弃使用请求来的左侧导航数据
      console.log(shuju);
    });   
  },
};
</script>


<style scoped>
@import url("../../../assets/css/Main/MainA/MainA-1.css");
</style>