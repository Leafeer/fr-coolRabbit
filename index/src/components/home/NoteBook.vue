<template>
  <div>
    <div >222</div>
    <el-row>
      <el-col :span="8"
        ><div class="grid-content bg-purple"><left-tree></left-tree></div
      ></el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple-light">
          <right-note></right-note></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
import leftTree from "./notebook/LeftTree";
import rightNote from "./notebook/RightNote";
import { getAllFolder, list, login } from "@/request/api/note";
export default {
  name: "notebook",
  data() {
    return {};
  },
  components: {
    leftTree,
    rightNote,
  },
  methods: {
    _getAllFolder() {
      getAllFolder().then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>