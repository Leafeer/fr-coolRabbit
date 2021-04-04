<template>
  <div>
    left
    <div @click="_getAllFolder">tree</div>
    <div>
      <el-tree
        :data="oTreeData"
        show-checkbox
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
      >
        <span class="custom-tree-node" slot-scope="{ node, oTreeData }">
          <span>{{ node.label }}</span>
          <span>
            <el-button type="text" size="mini" @click="() => append(oTreeData)">
              Append
            </el-button>
            <el-button
              type="text"
              size="mini"
              @click="() => remove(node, oTreeData)"
            >
              Delete
            </el-button>
          </span>
        </span>
      </el-tree>
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
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
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
            };
            this.oTreeData.push(oTree);
          });
        }
      });
    },
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
  },
};
</script>

<style>
</style>