<template>
  <div class="FooterA">
    <div v-for="ele in TailNavigation" :key="ele.id">
      <dl v-for="(ele1, index) in ele.datas" :key="index">
        <dt>{{ ele1.dt }}</dt>
        <dd v-for="(ele2, index) in ele1.dds" :key="index">
          <template v-if="typeof ele2 === 'object'">
            {{ ele2.title }}<span>{{ ele2.number }}</span>
          </template>
          <template v-else>
            <span>{{ ele2 }}</span>
          </template>
        </dd>
      </dl>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      //模拟后端数据
      TailNavigation: [
        {
          id: Math.random(),
          datas: [
            {
              dt: "用户帮助",
              dds: [
                "申请退款",
                "查看美团券密码",
                "常见问题",
                "用户协议",
                "隐私政策",
                "反诈骗公告",
                "消费者权益保障",
              ],
            },
            {
              dt: "美团服务",
              dds: [
                "美团外卖",
                "美团酒店",
                "猫眼电影",
                "美团配送",
                "美团云",
                "大众点评",
                "美团民宿",
                "无人配送",
              ],
            },
          ],
        },
        {
          id: Math.random(),
          datas: [
            {
              dt: "商家合作",
              dds: [
                "美团餐饮商户中心",
                "美食商家入驻(非外卖)",
                "美团外卖开店申请",
                "美团收银官网",
                "外卖配送加盟申请",
                "美团点评餐饮学院",
                "酒店商家入驻",
                "境内度假商家入驻",
                "综合商家入驻",
                "美团民宿房东商家入驻",
                "商家开票申请",
                "美团点评智能收银机",
                "美团点评餐饮开放平台",
                "美团点评收单",
                "免费使用美团排队",
                "快驴进货商家合作",
                "美团闪购商家入驻",
              ],
            },
          ],
        },
        {
          id: Math.random(),
          datas: [
            {
              dt: "代理商加盟",
              dds: [
                "美团外卖代理商招募",
                "到店餐饮代理商招募",
                "非餐饮代理商招募",
                "美团联盟",
                "美团收银招募线上分销商",
                "美团点评5S服务商招募",
                "美团收单渠道代理商招募",
              ],
            },
            {
              dt: "美团规则",
              dds: ["规则中心", "规则目录", "规则评议院"],
            },
          ],
        },
        {
          id: Math.random(),
          datas: [
            { dt: "关注美团", dds: ["美团新浪微博"] },
            {
              dt: "公司信息",
              dds: [
                "关于我们",
                "投资者关系",
                "加入我们",
                "商户诚信公约及管理办法",
                "保险经纪资质",
              ],
            },
            {
              dt: "廉正举报",
              dds: ["廉正举报平台"],
            },
            {
              dt: "知识产权",
              dds: ["知识产权维权平台"],
            },
          ],
        },
        {
          id: Math.random(),
          datas: [
            {
              dt: "消费者服务热线",
              dds: [
                { title: "外卖消费者：", number: 10109777 },
                { title: "猫眼消费者：", number: 10105335 },
                { title: "其他消费者：", number: 10107888 },
              ],
            },
            {
              dt: "商家服务热线",
              dds: [
                { title: "外卖&餐饮商家：", number: 10105557 },
                {
                  title: "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：",
                  number: 10100107,
                },
              ],
            },
            {
              dt: "投诉举报专区",
              dds: [
                { title: "违法和不良信息举报电话：", number: 4006018900 },
                { title: "举报邮箱：", number: "tousujubao@meituan.com" },
                "网上有害信息举报",
              ],
            },
            {
              dt: "商家自助入驻美团入口",
              dds: [],
            },
            {
              dt: "供应商注册入口",
              dds: [],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("../../assets/css/Footer/footerA.css");
</style>