<template>
  <div>
    left
    <div @click="_getAllFolder">tree</div>
    <div>
      <el-tree :data="oTreeData" :props="defaultProps"></el-tree>
    </div>
  </div>
</template>

<script>
import { getAllFolder } from "@/request/api/note";
export default {
  name: "lefttree",
  data() {
    return {
      oTreeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    _getAllFolder() {
      getAllFolder().then((res) => {
        if (res.data) {
          res.data.forEach((ele) => {
            console.log(ele.folderName);
            let oTree = {
                children: [],
                label: ele.folderName,
            }
            this.oTreeData.push(oTree)
          });
        }
      });
    },
  },
};
</script>

<style>
</style>