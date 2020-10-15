<template>
  <div class="MainB2">
    <div class="top">
      <dl>
        <dt>{{ mingshuData.name }}</dt>
        <dd
          v-for="(ele,index) in mingshuData.DataArr"
          :key="index"
          :class="{misi:index===indexmi}"
          @mouseenter="jinru(index)"
          :data-type="ele.type"
        >{{ ele.name }}</dd>
      </dl>
      <div class="t1">
        <span>全部</span>
        <i></i>
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li v-for="(ele,index) in mingshuData.DataArr[indexmi].Datas" :key="index">
          <div class="b1">
            <img class="img1" :src="ele.imgUrl" alt="图片" />
            <img :src="ele.imgUrl1" alt="图片" />
          </div>
          <div class="b2">
            <p class="p1">{{ ele.title }}</p>
            <p class="p2">
              <span v-for="ele1 in ele.SideMessage" :key="ele1.id">{{ ele1 }}</span>
            </p>
            <p class="p3">
              <span>¥</span>
              {{ ele.Front }}
            </p>
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
      //模拟后端传过来的数据
      mingshuData: {
        name: "推崇民宿",
        DataArr: [
          {
            type: "Nanjing",
            name: "南京",
            Datas: [
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/b2927866cbf2ad38b0688dcee75320872444720.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【Day&Night民宿*】地铁4号线/省妇幼/鼓楼/南艺/龙江地铁口公寓/鸡鸣寺/新街口/河西万达/可做饭",
                SideMessage: ["整套1居室·", "可住2人|", "南京艺术学院/龙江"],
                Front: 279,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p1.meituan.net/iphoenix/c1626da580aab9d4f0fc92529731baae7097057.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "摩登日式 精致榻榻米 靠南京南站 毗邻夫子庙 地铁3号线沿线 温馨舒适 干净整饬",
                SideMessage: [
                  "整套1居室·",
                  "可住2人|",
                  "南京南站/证大喜马拉雅",
                ],
                Front: 200,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p1.meituan.net/iphoenix/7228dbe545e337d2d60911235edb60832413955.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "（金鸿泊小雏菊）紧邻雨花台/报恩寺/夫子庙老门东/南京南站",
                SideMessage: ["整套1居室·", "可住2人|"],
                Front: 129,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/66c0404dcbee4bf726eb5a5fcdbbbbcf2525255.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "夫子庙报恩寺中华门景区临公交地铁ins风05室",
                SideMessage: ["整套1居室·", "可住2人|", "夫子庙/水游城"],
                Front: 199,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p1.meituan.net/iphoenix/aa1e9926c262b50de887427c5fe1cde9150089.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【和你说早安，都带着我十二分的笑】日式清新大床房  天隆寺地铁站/直达新街口夫子庙老门东 适合学生情侣出差",
                SideMessage: ["整套1居室·", "可住2人|", "安德门/小行"],
                Front: 268,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/8706f1437bddd30dd58d111bc9f00bca934396.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【Day&Night民宿⑧】地铁4号线直达/南艺/鼓楼/省妇幼/南大南师大/新城市广场/万达/温馨龙江投影公寓/可做饭",
                SideMessage: ["整套1居室·", "可住2人|", "南京艺术学院/龙江"],
                Front: 329,
                id: Math.random(),
              },
            ],
          },
          {
            type: "Hangzhou",
            name: "杭州",
            Datas: [
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/068297f18e4818edb5315715645154622242590.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "吾悦广场 万象汇 爱情海 地铁口 浪漫大床房",
                SideMessage: ["整套1居室·", "可住2人|", "新城吾悦商业广场"],
                Front: 198,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/9b13a60bf895c77d4f094b93edfc644f212723.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "绿野仙踪带幕布投影浪漫一居",
                SideMessage: ["整套1居室·", "可住2人|", "西湖湖滨商圈"],
                Front: 599,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/118c39d070fda05c511cd4193f8f15c5194249.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "西湖风景区音乐图书馆大床房",
                SideMessage: ["整套1居室·", "可住2人|", "西湖风景区/灵隐寺"],
                Front: 178,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/6c37f8c128a278505398889b007f89492743656.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "杭州东站地铁口loft极米H3投影大床房/15分钟直达西湖/高端床品",
                SideMessage: ["整套1居室·", "可住2人|", "杭州东站"],
                Front: 220,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/fe8df74e5f2a0768933ec97aff2a88492630350.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "临平地铁口/1号线直达西湖/东站 银泰城商场上北欧精装公寓 楼下吃喝玩乐 可做饭 可打卡拍照哦",
                SideMessage: ["整套1居室·", "可住2人|", "临平新城"],
                Front: 169,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/13cb5c3695303fafc0cda4ff6f499a351214471.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "朴舍【白日梦】120寸投影 地铁上盖 西湖景区20分钟直达 网红打卡",
                SideMessage: ["整套1居室·", "可住2人|", "黄龙/高新文教区"],
                Front: 198,
                id: Math.random(),
              },
            ],
          },
          {
            type: "Suzhou",
            name: "苏州",
            Datas: [
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/72544f7cb918bf867b8dcf485b252f47873544.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "『月神少女』临双地铁口 山塘街观前街 寒山寺平江路 拙政园博物馆 独立卫浴 整套公寓出租 楼下商圈",
                SideMessage: ["整套1居室·", "可住2人|", "三香路沿线"],
                Front: 108,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p0.meituan.net/iphoenix/8c4f96304521bfc89126569d144adb10318460.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "普通大床房-蘇舍汉服主题民宿平江路观前街店",
                SideMessage: ["整套1居室·", "可住2人|", "观前街地区"],
                Front: 137,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p0.meituan.net/iphoenix/80ef1962203071578880ae7e9ab3de149846512.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "【悠家民宿】尹山湖 近地铁 湖景阳光落地窗LOFT",
                SideMessage: ["整套1居室·", "可住3人|", "郭巷镇"],
                Front: 298,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/29c36b0ec46b731dcb2c6cb6d12b7d0d2216999.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "智能温馨小屋（苏州高铁北站）",
                SideMessage: ["整套1居室·", "可住2人|", "蠡口家具城"],
                Front: 172,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p0.meituan.net/iphoenix/fbee9599e82b775d93786c5668c0c96484721.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "【绿妤】精装LOFT/私人影院/家庭房",
                SideMessage: ["整套2居室·", "可住6人|", "万达广场"],
                Front: 198,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/121efab935ff0846fc42f3ccc9f6208a1889916.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "<庆余年>苏州站/山塘街/拙政园/虎丘/万达广场",
                SideMessage: ["整套2居室·", "可住4人|", "万达广场"],
                Front: 228,
                id: Math.random(),
              },
            ],
          },
          {
            type: "Hefei",
            name: "合肥",
            Datas: [
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/127715cffbc62fde12f756f1d7cc7e2c1664721.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "尧里/人间/地铁直达//超大投影/步行街/火车站",
                SideMessage: [
                  "整套1居室·",
                  "可住2人|",
                  " 双岗财富广场/明发商业广场/四里河",
                ],
                Front: 179,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/87442fde0f048307430c48e59eced38f2631402.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "尧里/栖居/超大投影/地铁口/loft",
                SideMessage: [
                  "整套1居室·",
                  "可住2人|",
                  " 双岗财富广场/明发商业广场/四里河",
                ],
                Front: 189,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/553f90053ce3e9f784e26a734f6ce0e21202706.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "阳光homestay日式 秋千樱花房/巨幕投影/精美和服浪漫樱花打卡拍照/大落地窗/近南站/近罍街/双地铁口/美食街",
                SideMessage: ["整套1居室·", "可住3人|", "高铁南站/中科大"],
                Front: 199,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/839a1f2b1f1eb5d3656a4196f02a8890688805.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【枫】京商商贸城/高清投影/安医四附院/合肥保税区/一六八中学/轻雅一居",
                SideMessage: ["整套1居室·", "可住2人|", "磨店职教城"],
                Front: 139,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/a409958c2b386a20f3e21089835affeb3413911.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【First邂逅】遇见 home  大学城/中环城/明珠广场/海洋公园/合肥工业大学/安徽医科大/翡翠湖风景区/智能家居",
                SideMessage: ["整套1居室·", "可住2人|", "大学城/翡翠湖/中环城"],
                Front: 198,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/1ce024f9214b36df3864f3833c7c5c376620016.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "南站旁/漫乐城/省立儿童医院+密码入住+阳光曝晒床上4件套+独立公寓家具家电齐全【已消毒】【可周租，月租】",
                SideMessage: ["整套1居室·", "可住2人|", "宁国路工大美食一条街"],
                Front: 158,
                id: Math.random(),
              },
            ],
          },
          {
            type: "Ningbo",
            name: "宁波",
            Datas: [
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/1ed71859c60d53970b627a741434eed12560444.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "每客消毒/小小之家/可爱公主风",
                SideMessage: ["整套1居室·", "可住2人|", " 北仑港区"],
                Front: 109,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/ca6a7dfd070bb1ad83487a299e6a1eda5669256.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "火车站旁，简约主题，投影仪",
                SideMessage: ["整套1居室·", "可住2人|", "鄞州商业区"],
                Front: 139,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/e45df474579fd4d3f4272b777dc646ef60370.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "客运中心附近，双床，工业风",
                SideMessage: ["整套1居室·", "可住4人|", "鄞州商业区"],
                Front: 188,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/d9d20b70b59bffa1ef02b698853d18c9280389.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【轻宿】短租房  北仑富邦世纪广场 北仑区府 银泰城凤凰山乐园",
                SideMessage: ["整套1居室·", "可住3人|", "北仑港区"],
                Front: 90,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p1.meituan.net/iphoenix/3b724b641b44595e3b74628a43f828c14182233.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【First邂逅】遇见 home  大学城/中环城/明珠广场/海洋公园/合肥工业大学/安徽医科大/翡翠湖风景区/智能家居",
                SideMessage: ["整套1居室·", "可住2人|", "大学城/翡翠湖/中环城"],
                Front: 198,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/1ce024f9214b36df3864f3833c7c5c376620016.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "夏如烟【枕梦】loft100寸投屏/近火车站/天一广场/地铁/天一阁/鼓楼/南塘/罗蒙/聚会",
                SideMessage: ["整套2居室·", "可住7人|", "海曙商业区"],
                Front: 258,
                id: Math.random(),
              },
            ],
          },
          {
            type: "Wuxi",
            name: "无锡",
            Datas: [
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/04deac21ac22dc78569ee6f614e604f2935364.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【椿·舍】日式MJ风loft公寓/火车站三阳南禅寺地铁一号直达/大学城太湖新城地铁口/近海岸城/万象城/融创旅游城",
                SideMessage: ["整套1居室·", "可住4人|", " 无锡太湖风景区"],
                Front: 228,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/c1c4e7389543f42bd2f9f6b689bb586684096.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "投资400亿融创文旅城景观房，睡在床上看到景点，干净、温馨、交通便捷/地铁、高架、湖底隧道、高速路口",
                SideMessage: ["整套1居室·", "可住5人|", "无锡太湖风景区"],
                Front: 158,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p0.meituan.net/iphoenix/31a85e22b8974b93646a6f88095467ef4916465.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "近灵山大佛/拈花湾/陌上云栖客栈【观星】1.8+1.2+2米榻榻米（两室一卫3床）含早/豪华家庭房",
                SideMessage: ["整套2居室·", "可住5人|", "灵山风景区"],
                Front: 599,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/6acc32088ac223eb8414142a3abef975763448.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "【独栋公寓】近火车站/智能门禁/自助入住",
                SideMessage: ["整套1居室·", "可住3人|", "惠山风景区"],
                Front: 118,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/bbf64f7f1b380e64a47ebbf8eef94af96432302.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "【独栋公寓】近火车站/智能门禁/自助入住",
                SideMessage: ["整套1居室·", "可住2人|", "无锡太湖风景区"],
                Front: 128,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/eef2e75b5b7171d4ac7afa8753909b89773360.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "太湖悦溪公寓",
                SideMessage: ["整套1居室·", "可住2人|", "无锡太湖风景区"],
                Front: 153,
                id: Math.random(),
              },
            ],
          },
          {
            type: "Yangzhou",
            name: "扬州",
            Datas: [
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/d69525696024bdc4186eed0eca998aac1103215.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "「早安」何园皮市街头众多少女必备拍照壹",
                SideMessage: ["整套1居室·", "可住4人|", "何园-1912街区"],
                Front: 138,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/1e4ec95134f13ae14508c32b92de89c7312260.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "万达商圈阳光充沛温馨浪漫公寓",
                SideMessage: ["整套1居室·", "可住5人|", "顺达广场"],
                Front: 148,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/4d9dfb5986213fd78eea22e3373b7fa72695159.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "易居现代风尚(高速北出入口/北区希尔顿新纪元生活广场公寓/邻瘦西湖)",
                SideMessage: ["整套2居室·", "可住5人|", "城北"],
                Front: 218,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/b69c3f6ae457e50bf6a288ed72a8234c2545551.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "周密消毒【拾贰浪漫剧场】红玫瑰复古ins 100寸投影超大投屏可做饭有冰箱万达广场东关街瘦西湖文昌阁个园何园京华城",
                SideMessage: ["整套1居室·", "可住3人|", "万达广场"],
                Front: 128,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p0.meituan.net/iphoenix/a09b8b3857f0ded6185ee3da5fa8dbf8423400.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "瘦西湖东关街泰达公寓",
                SideMessage: ["整套1居室·", "可住2人|", "城东"],
                Front: 168,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/891ee3d192fbf2b6c3e825dc81b345c83523084.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【早安】何园斜对面 超繁华老街 紧邻东关街 个园 皮市街 东关古渡",
                SideMessage: ["整套1居室·", "可住2人|", "何园-1912街区"],
                Front: 158,
                id: Math.random(),
              },
            ],
          },
          {
            type: "Jiaxing",
            name: "嘉兴",
            Datas: [
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/7566c634940ff75b7ef9b1bcfc8aefc4318860.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "（已消毒）乌镇西栅景区for水木年华（部分临河）大床房/情侣出游/免费接送/免费停车/汉服租赁打折/可开发票/游玩攻略",
                SideMessage: ["整套1居室·", "可住2人|", "乌镇"],
                Front: 113,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/c8d26a7c433781cd7267ef5213a52956322286.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "泰富世界城.月星家居.龙鼎万达公寓多套并不只一套",
                SideMessage: ["整套1居室·", "可住2人|", "经开万达广场"],
                Front: 200,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p0.meituan.net/iphoenix/fafc2fc8e3e21374983ea249ea89289b1648723.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "揽月·已消毒复式双床 情侣入住 有停车位 免费接送 东栅景区西栅景区附近",
                SideMessage: ["整套2居室·", "可住4人|", "乌镇"],
                Front: 268,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/4a6ac482b1998fe3b5a4014e7e840de175856.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "意林小筑客栈阳台大床房，位于西塘风景区内，傍河而建，出门即是沿河小径，环境清幽，交通便利，欢迎入住",
                SideMessage: ["整套1居室·", "可住3人|", "西塘古镇景区"],
                Front: 188,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p1.meituan.net/iphoenix/ca0108a9c602feeed4c2294f908103523398761.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "【乌镇西栅民宿】依米花标间/享乌镇接站/酒吧打折",
                SideMessage: ["整套1居室·", "可住4人|", "乌镇"],
                Front: 108,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/iphoenix/b9d84e55a8e36b336d7fbc1531addef83185047.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "心晨服务公寓(嘉兴万达广场店)      经济大床房",
                SideMessage: ["整套1居室·", "可住2人|", "万达广场/动植物园"],
                Front: 138,
                id: Math.random(),
              },
            ],
          },
          {
            type: "Changzhou",
            name: "常州",
            Datas: [
              {
                imgUrl:
                  "http://p0.meituan.net/iphoenix/0d0c780aeed0609f34891eb01c400289275904.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【相寓·初恋】甜美情侣民宿  近淹城吾悦万达   直达恐龙园  环球港  大屏高清投影一居",
                SideMessage: [
                  "整套1居室·",
                  "可住2人|",
                  "春秋淹城旅游区/大学城",
                ],
                Front: 258,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/cc86380f250bb21d4cfc8dbf868e3cef1133346.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【蝙蝠侠Loft】火车站/市中心/半山书局/南大街/文化宫/吾悦/奥体/万达/淹城/恐龙园/嬉戏谷",
                SideMessage: ["整套1居室·", "可住2人|", "市中心南大街区域"],
                Front: 149,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/7d8a0d05c09be29458a88f3cbd29575e2517902.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "百寸投影，紧邻吾悦广场，武进万达，现代ins风，BRT，地铁紧邻",
                SideMessage: ["整套2居室·", "可住4人|", "乌镇"],
                Front: 268,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/4a6ac482b1998fe3b5a4014e7e840de175856.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "意林小筑客栈阳台大床房，位于西塘风景区内，傍河而建，出门即是沿河小径，环境清幽，交通便利，欢迎入住",
                SideMessage: [
                  "整套1居室·",
                  "可住2人|",
                  "春秋淹城旅游区/大学城",
                ],
                Front: 198,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p1.meituan.net/iphoenix/939a1c9b705def01610c096bef8a8df81327208.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【小南瓜公寓】湖塘吾悦武进万达旁离淹城2公里中华恐龙园20分钟车程巨幕影视房提供接站接机服务清新田园",
                SideMessage: [
                  "整套1居室·",
                  "可住4人|",
                  "春秋淹城旅游区/大学城",
                ],
                Front: 268,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p1.meituan.net/iphoenix/40e952996287398d550a7a91bd091fde3182833.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "常州火车站高铁北站环球港恐龙园万达广场豪华 大床 房",
                SideMessage: [
                  "整套1居室·",
                  "可住2人|",
                  "环球恐龙城及恐龙谷温泉景区",
                ],
                Front: 168,
                id: Math.random(),
              },
            ],
          },
          {
            type: "MountHuangshan",
            name: "黄山",
            Datas: [
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/b20cf324b3288c63e183ee9d68a2e1d22169601.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "【天空之城】宏村景区内/古典雕花大床单间/私家徽派建筑庭院",
                SideMessage: ["整套1居室·", "可住2人|", "宏村景区"],
                Front: 198,
                id: Math.random(),
              },
              {
                imgUrl:
                  "http://p0.meituan.net/iphoenix/e0edf2b0171f01be8fc9655bc4b0e08847198.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "黄山脚下(近换乘中心)汪宅民宿-舒适亲子间-景区互通-可讲解行程并提供免费地图和登山仗（旅游攻略请戳主页哦）",
                SideMessage: ["整套1居室·", "可住3人|", "汤口南大门"],
                Front: 108,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/21f6b420038ced6ddd84935505c8db7c1015853.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "太平湖半山临水ins轻简风度假公寓湖景房",
                SideMessage: ["整套2居室·", "可住4人|", "太平湖半山临水"],
                Front: 268,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/a8bb8468ab913888419130b3f70afa512968332.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "黄山汤口南大门小桥流水观景标间-换乘点免费接送-近汤口南大门换乘点3分钟- 免费讲解路线并免费提供登山杖和黄山路线图",
                SideMessage: ["整套1居室·", "可住2人|", "汤口南大门"],
                Front: 108,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/783113ecd63fe9c0ae7bf8a3a4a81023621590.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title:
                  "长租更优惠近屯溪老街 黎阳in巷 太平洋购物中心 落地窗 北欧简约风",
                SideMessage: ["整套1居室·", "可住2人|", "黄山学院北区"],
                Front: 218,
                id: Math.random(),
              },
              {
                imgUrl:
                  "https://img.meituan.net/phoenix/dbba5a51cf8892d798577fe38f384d1b189034.jpg@740w_416h_1e_1c",
                imgUrl1:
                  "https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png",
                title: "3室两厅院中凉亭悠哉悠哉，可住六人，适合两大家子小团游",
                SideMessage: ["整套3居室·", "可住9人|", "高铁新区"],
                Front: 298,
                id: Math.random(),
              },
            ],
          },
        ],
      },

      //显示DataArr属性的索引对应的信息
      indexmi: 0,

      //计时器编号,防止过快的鼠标上标题上移动,过快的切换
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
  computed: {},
};
</script>

<style scoped>
@import url("../../../assets/css/typeface/ziti.css");
@import url("../../../assets/css/Main/MainB/mainB-2.css");
</style>