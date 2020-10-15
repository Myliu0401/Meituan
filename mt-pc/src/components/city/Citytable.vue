<template>
  <div class="Citytable">
    <dl v-for="(ele, index) in citys" :key="index">
      <dt>{{ ele.title }}:</dt>
      <dd v-for="ele1 in ele.data" :key="ele1.id" @click="$store.state.dizhi = ele1.name">
        <router-link to="/">{{ ele1.name }}</router-link>
      </dd>
    </dl>
  </div>
</template>



<script>
export default {
  props: {
    citys: {
      type: Array,
      default: () => {
        return [];
      },
      required: true,
    },
  },
};
</script>


<style scoped>
.Citytable dl {
  display: flex;
}
.Citytable dl dt {
  font-size: 16px;
  color: #333333;
  font-weight: 500;
}
.Citytable dl dd {
  margin: 0px 20px;
  color: #666666;
  font-size: 14px;
}
.Citytable dl dd:hover a {
  cursor: pointer;
  color: #222222;
  font-weight: 500;
}
</style>