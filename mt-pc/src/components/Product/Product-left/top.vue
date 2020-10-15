<template>
  <div class="top">
    <div class="topNo" v-for="index in 2" :key="index">
      <div class="t1">
        <span class="tno1">{{ index === 1 ? "分类" : "区域" }}</span
        ><span class="tno2">全部</span>
      </div>
      <div class="t2">
        <ul>
          <li
            v-for="ele in index === 1 ? ClassifiedData : RegionalData"
            :key="ele.type"
            @mouseleave="likai(ele)"
          >
            <span class="naidiv" @mouseenter="jinru(ele)">{{ ele.title }}</span>
            <div
              class="midiv"
              v-if="midiv.length && ele.type === midiv[0].type"
              @mouseenter="jinru1()"
            >
              <dl v-for="ele1 in midiv" :key="ele1.type">
                <dt class="mydt">{{ ele1.title }}</dt>
                <dd>全部</dd>
                <dd v-for="ele2 in ele1.subList" :key="ele2.id">
                  {{ ele2.name }}
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
import axios from "../../../http.js";
export default {
  data() {
    return {
      ClassifiedData: [
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",
              id: Math.random(),
            },
            {
              name: "火锅",
              id: Math.random(),
            },
            {
              name: "西餐",
              id: Math.random(),
            },
            {
              name: "川湘菜",
              id: Math.random(),
            },
            {
              name: "粤菜",
              id: Math.random(),
            },
            {
              name: "徽菜",
              id: Math.random(),
            },
            {
              name: "东南亚菜",
              id: Math.random(),
            },
            {
              name: "蒙餐",
              id: Math.random(),
            },
            {
              name: "食品保健",
              id: Math.random(),
            },
            {
              name: "饮品店",
              id: Math.random(),
            },
            {
              name: "自助餐",
              id: Math.random(),
            },
            {
              name: "聚餐宴请",
              id: Math.random(),
            },
            {
              name: "江浙菜",
              id: Math.random(),
            },
            {
              name: "中式烧烤/烤串",
              id: Math.random(),
            },
            {
              name: "东北菜",
              id: Math.random(),
            },
            {
              name: "新疆菜",
              id: Math.random(),
            },
            {
              name: "特色菜",
              id: Math.random(),
            },
            {
              name: "面包甜点",
              id: Math.random(),
            },
            {
              name: "小吃快餐",
              id: Math.random(),
            },
            {
              name: "烧烤烤肉",
              id: Math.random(),
            },
            {
              name: "香锅烤鱼",
              id: Math.random(),
            },
            {
              name: "西北菜",
              id: Math.random(),
            },
            {
              name: "生鲜蔬果",
              id: Math.random(),
            },
            {
              name: "台湾/客家菜",
              id: Math.random(),
            },
            {
              name: "福建菜",
              id: Math.random(),
            },
            {
              name: "生日蛋糕",
              id: Math.random(),
            },
            {
              name: "日韩料理",
              id: Math.random(),
            },
            {
              name: "大闸蟹",
              id: Math.random(),
            },
            {
              name: "小龙虾",
              id: Math.random(),
            },
            {
              name: "京菜鲁菜",
              id: Math.random(),
            },
            {
              name: "云贵菜",
              id: Math.random(),
            },
            {
              name: "汤/粥/炖菜",
              id: Math.random(),
            },
          ],
        },
        {
          title: "酒店住宿",
          type: "hotel",
          subList: [
            {
              name: "经济型酒店",
              id: Math.random(),
            },
            {
              name: "公寓型酒店",
              id: Math.random(),
            },
            {
              name: "高星酒店",
              id: Math.random(),
            },
            {
              name: "多人出行",
              id: Math.random(),
            },
            {
              name: "钟点房",
              id: Math.random(),
            },
            {
              name: "高端酒店",
              id: Math.random(),
            },
            {
              name: "客栈",
              id: Math.random(),
            },
            {
              name: "特价酒店",
              id: Math.random(),
            },
            {
              name: "品牌连锁",
              id: Math.random(),
            },
            {
              name: "温泉酒店",
              id: Math.random(),
            },
            {
              name: "主题酒店",
              id: Math.random(),
            },
            {
              name: "青年旅社",
              id: Math.random(),
            },
            {
              name: "海外酒店",
              id: Math.random(),
            },
            {
              name: "情侣酒店",
              id: Math.random(),
            },
            {
              name: "度假酒店/度假村",
              id: Math.random(),
            },
            {
              name: "低星酒店",
              id: Math.random(),
            },
            {
              name: "公寓民宿",
              id: Math.random(),
            },
          ],
        },
        {
          title: "周边游",
          type: "swim",
          subList: [
            {
              name: "主题公园",
              id: Math.random(),
            },
            {
              name: "短途游",
              id: Math.random(),
            },
            {
              name: "滑雪",
              id: Math.random(),
            },
            {
              name: "真人CS",
              id: Math.random(),
            },
            {
              name: "骑马",
              id: Math.random(),
            },
            {
              name: "定制游",
              id: Math.random(),
            },
            {
              name: "水上乐园",
              id: Math.random(),
            },
            {
              name: "直通车",
              id: Math.random(),
            },
            {
              name: "酒景套餐",
              id: Math.random(),
            },
            {
              name: "农家乐",
              id: Math.random(),
            },
            {
              name: "漂流",
              id: Math.random(),
            },
            {
              name: "温泉",
              id: Math.random(),
            },
            {
              name: "动植物园",
              id: Math.random(),
            },
            {
              name: "展览馆",
              id: Math.random(),
            },
            {
              name: "高空观景",
              id: Math.random(),
            },
            {
              name: "密室逃脱",
              id: Math.random(),
            },
            {
              name: "单车出租",
              id: Math.random(),
            },
            {
              name: "景点",
              id: Math.random(),
            },
            {
              name: "海洋馆",
              id: Math.random(),
            },
            {
              name: "游船",
              id: Math.random(),
            },
            {
              name: "攀登运动",
              id: Math.random(),
            },
            {
              name: "滑冰",
              id: Math.random(),
            },
            {
              name: "景点套餐",
              id: Math.random(),
            },
          ],
        },
        {
          title: "休闲娱乐",
          type: "entertainment",
          subList: [
            {
              name: "足疗/按摩",
              id: Math.random(),
            },
            {
              name: "酒吧",
              id: Math.random(),
            },
            {
              name: "私人影院",
              id: Math.random(),
            },
            {
              name: "网吧网咖",
              id: Math.random(),
            },
            {
              name: "轰趴馆",
              id: Math.random(),
            },
            {
              name: "采摘/农家乐",
              id: Math.random(),
            },
            {
              name: "文化艺术",
              id: Math.random(),
            },
            {
              name: "新奇体验",
              id: Math.random(),
            },
            {
              name: "洗浴/汗蒸",
              id: Math.random(),
            },
            {
              name: "电玩/游戏厅",
              id: Math.random(),
            },
            {
              name: "DIY手工坊",
              id: Math.random(),
            },
            {
              name: "茶馆",
              id: Math.random(),
            },
            {
              name: "桌游",
              id: Math.random(),
            },
            {
              name: "演出赛事",
              id: Math.random(),
            },
            {
              name: "团建拓展",
              id: Math.random(),
            },
            {
              name: "KTV",
              id: Math.random(),
            },
            {
              name: "运动健身",
              id: Math.random(),
            },
            {
              name: "密室逃脱",
              id: Math.random(),
            },
            {
              name: "棋牌室",
              id: Math.random(),
            },
            {
              name: "真人CS",
              id: Math.random(),
            },
            {
              name: "VR",
              id: Math.random(),
            },
          ],
        },
        {
          title: "结婚",
          type: "marry",
          subList: [
            {
              name: "婚庆公司",
              id: Math.random(),
            },
            {
              name: "婚礼小礼品",
              id: Math.random(),
            },
            {
              name: "婚礼跟拍",
              id: Math.random(),
            },
            {
              name: "海外婚礼",
              id: Math.random(),
            },
            {
              name: "个性写真",
              id: Math.random(),
            },
            {
              name: "婚车租赁",
              id: Math.random(),
            },
            {
              name: "婚宴",
              id: Math.random(),
            },
            {
              name: "婚纱礼服",
              id: Math.random(),
            },
          ],
        },
        {
          title: "抽奖",
          type: "luckdraw",
          subList: [
            {
              name: "丽人面免单",
              id: Math.random(),
            },
            {
              name: "美梦成真",
              id: Math.random(),
            },
            {
              name: "霸王餐",
              id: Math.random(),
            },
            {
              name: "free游",
              id: Math.random(),
            },
          ],
        },
      ],
      RegionalData: [
        {
          title: "推荐商圈",
          type: "district",
          subList: [
            {
              name: "沙井",
              id: Math.random(),
            },
            {
              name: "车公庙",
              id: Math.random(),
            },
            {
              name: "万科广场/世贸",
              id: Math.random(),
            },
            {
              name: "华强北",
              id: Math.random(),
            },
            {
              name: "龙华",
              id: Math.random(),
            },
            {
              name: "坂田",
              id: Math.random(),
            },
            {
              name: "龙岗中心城",
              id: Math.random(),
            },
            {
              name: "宝安中心区",
            },
            {
              name: "西乡",
              id: Math.random(),
            },
            {
              name: "福永",
              id: Math.random(),
            },
            {
              name: "松岗",
              id: Math.random(),
            },
            {
              name: "科技园",
              id: Math.random(),
            },
            {
              name: "海岸城/保利",
              id: Math.random(),
            },
            {
              name: "横岗",
              id: Math.random(),
            },
            {
              name: "坪山",
              id: Math.random(),
            },
          ],
        },
        {
          title: "福田区",
          type: "Futian",
          subList: [
            {
              name: "华强南",
              id: Math.random(),
            },
            {
              name: "新城市广场",
              id: Math.random(),
            },
            {
              name: "竹子林",
              id: Math.random(),
            },
            {
              name: "福田保税区",
              id: Math.random(),
            },
            {
              name: "香蜜湖",
              id: Math.random(),
            },
            {
              name: "八卦岭/园岭",
              id: Math.random(),
            },
            {
              name: "车公庙",
              id: Math.random(),
            },
            {
              name: "市民中心",
              id: Math.random(),
            },
            {
              name: "沙头",
              id: Math.random(),
            },
            {
              name: "梅林",
              id: Math.random(),
            },
            {
              name: "华强北",
              id: Math.random(),
            },
            {
              name: "景田",
              id: Math.random(),
            },
            {
              name: "市中心/会展中心",
              id: Math.random(),
            },
            {
              name: "荔枝公园片区",
              id: Math.random(),
            },
            {
              name: "上沙/下沙",
              id: Math.random(),
            },
            {
              naem: "皇岗/水围",
              id: Math.random(),
            },
            {
              name: "新洲/石厦",
              id: Math.random(),
            },
            {
              name: "皇岗/水围",
              id: Math.random(),
            },
            {
              name: "新洲/石厦",
              id: Math.random(),
            },
            {
              naem: "岗厦",
              id: Math.random(),
            },
          ],
        },
        {
          title: "南山区",
          type: "Nanshan",
          subList: [
            {
              name: "蛇口",
              id: Math.random(),
            },
            {
              name: "西丽",
              id: Math.random(),
            },
            {
              name: "前海",
              id: Math.random(),
            },
            {
              name: "太古城",
              id: Math.random(),
            },
            {
              name: "世界之窗",
              id: Math.random(),
            },
            {
              name: "龙井",
              id: Math.random(),
            },
            {
              name: "南头",
              id: Math.random(),
            },
            {
              name: "南油",
              id: Math.random(),
            },
            {
              name: "南山中心区",
              id: Math.random(),
            },
            {
              name: "白石洲",
              id: Math.random(),
            },
            {
              name: "白石洲",
              id: Math.random(),
            },
            {
              name: "花园城",
              id: Math.random(),
            },
            {
              name: "南山京基百纳",
              id: Math.random(),
            },
            {
              name: "益田假日",
              id: Math.random(),
            },
            {
              name: "华侨城",
              id: Math.random(),
            },
            {
              name: "科技园",
              id: Math.random(),
            },
            {
              name: "海岸城/保利",
              id: Math.random(),
            },
            {
              name: "欢乐海岸",
              id: Math.random(),
            },
            {
              name: "海上世界",
              id: Math.random(),
            },
            {
              name: "深圳湾",
              id: Math.random(),
            },
          ],
        },
        {
          title: "罗湖区",
          type: "LuohuLake",
          subList: [
            {
              name: "翠竹路沿线",
              id: Math.random(),
            },
            {
              name: "万象城",
              id: Math.random(),
            },
            {
              name: "春风万佳/文锦渡",
              id: Math.random(),
            },
            {
              name: "新秀/罗芳",
              id: Math.random(),
            },
            {
              name: "国贸",
              id: Math.random(),
            },
            {
              name: "东门商业圈",
              id: Math.random(),
            },
            {
              name: "喜荟城/水库",
              id: Math.random(),
            },
            {
              name: "布心/太白路",
              id: Math.random(),
            },
            {
              name: "梧桐山",
              id: Math.random(),
            },
            {
              name: "莲塘",
              id: Math.random(),
            },
            {
              name: "宝安南路沿线",
              id: Math.random(),
            },
            {
              name: "地王大厦",
              id: Math.random(),
            },
            {
              name: "田贝/水贝",
              id: Math.random(),
            },
            {
              name: "KK mall",
              id: Math.random(),
            },
            {
              name: "笋岗",
              id: Math.random(),
            },
            {
              name: "火车站",
              id: Math.random(),
            },
            {
              name: "黄贝岭",
              id: Math.random(),
            },
            {
              name: "银湖/泥岗",
              id: Math.random(),
            },
            {
              name: "罗湖区政府",
              id: Math.random(),
            },
          ],
        },
        {
          title: "宝安区",
          type: "Baoan",
          subList: [
            {
              name: "港隆城",
              id: Math.random(),
            },
            {
              name: "松岗",
              id: Math.random(),
            },
            {
              name: "时代城",
              id: Math.random(),
            },
            {
              name: "宝安国际机场",
              id: Math.random(),
            },
            {
              name: "上川自由路",
              id: Math.random(),
            },
            {
              name: "宝体",
              id: Math.random(),
            },
            {
              name: "新安",
              id: Math.random(),
            },
            {
              name: "西乡",
              id: Math.random(),
            },
            {
              name: "海雅缤纷城",
              id: Math.random(),
            },
            {
              name: "罗田/燕川",
              id: Math.random(),
            },
            {
              name: "光明新区",
              id: Math.random(),
            },
            {
              name: "天虹汇一城",
              id: Math.random(),
            },
            {
              name: "石岩",
              id: Math.random(),
            },
            {
              name: "沙井",
              id: Math.random(),
            },
            {
              name: "固戍",
              id: Math.random(),
            },
            {
              name: "沙井京基百纳",
              id: Math.random(),
            },
            {
              name: "翻身",
              id: Math.random(),
            },
            {
              name: "七巧国",
              id: Math.random(),
            },
            {
              name: "宝安中心区",
              id: Math.random(),
            },
            {
              name: "福永",
              id: Math.random(),
            },
            {
              name: "固戍桃源居",
              id: Math.random(),
            },
            {
              name: "宝立方",
              id: Math.random(),
            },
            {
              name: "共乐城",
              id: Math.random(),
            },
            {
              name: "壹乐会",
              id: Math.random(),
            },
          ],
        },
      ],
      midiv: [],
    };
  },

  methods: {
    jinru(data) {
      this.midiv.length = 0;
      this.midiv.push(data);
      event.target.classList.add("naimi");
    },
    likai() {
      this.midiv = [];
      event.target.firstChild.classList.remove("naimi");
    },
    jinru1() {
      const name = event.relatedTarget.nodeName;
      if (name === "LI" || name === "SPAN") {
        event.target.previousSibling.classList.add("naimi");
      }
    },
  },

  created() {
    //分类列表======由于后端数据不完整,所以不使用
    axios.classificationList().then((shuju) => {});

    //推荐商圈========由于后端数据不足,所以不使用
    axios.recommendBusinessDistrict().then((shuju) => {});
  },
};
</script>



<style scoped>
@import url("../../../assets/css/Product/left/top.css");
.top {
  background-color: #fff;
  border-radius: 4px;
  color: #333333;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e5e5e5;
}
</style>