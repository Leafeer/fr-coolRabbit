<template>
  <div>
    <!-- 参数入口 -->
    <el-input v-model="sText"></el-input>

    <el-button @click="_changeJson">转换</el-button>
    <!-- json出口 -->
    <el-input v-model="sJson"></el-input>
  </div>
</template>

<script>
export default {
  name: "jsontoolindex",
  data() {
    return {
      sText: "",
      sJson: "",
    };
  },
  methods: {
    _changeJson() {
      console.log(typeof(this.sText));
      this.sText = JSON.parse(this.sText)
      this.sJson = this.sText;
        console.log(typeof(this.sText));
    },
  },
};
</script>

<style>
</style>