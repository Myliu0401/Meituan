<template>
  <div id="app">
     <!-- <GeneralFramework></GeneralFramework> -->
     <router-view></router-view>
  </div>
</template>

<script>
import GeneralFramework from './components/index.vue';

export default {
  name: "App",
  components: {
    GeneralFramework,
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  list-style: none;
}

/* :root,
body {
  width: 100%;
  background-color: #f8f8f8;
} */

</style>
