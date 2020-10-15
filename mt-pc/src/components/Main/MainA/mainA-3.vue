<template>
  <div class="mainA3">
    <div v-for="ele in shujuArr" :key="ele.id" class="A3">
      <div :style="{backgroundImage:ele.url}"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shujuArr: [
        {
          url:
            "url(http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg",
          id: Math.random(),
        },
        {
          url:
            "url(http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg",
          id: Math.random(),
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("../../../assets/css/Main/MainA/MainA-3.css");
</style>