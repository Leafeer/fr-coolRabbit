<template>
  <div class="all">
    <grid-layout
      :layout.sync="layout"
      :col-num="4"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        {{ item.i }}
        <label></label>
      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
import VueGridLayout from "vue-grid-layout";
import Label from './label/Label.vue';
export default {
  name:"homelabel",
  data() {
    return {
      layout: [
        { x: 0, y: 0, w: 2, h: 2, i: "0" },
        { x: 2, y: 0, w: 2, h: 4, i: "1" },
        { x: 0, y: 2, w: 2, h: 5, i: "2" }

      ],
    };
  },
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    Label,
  },
};
</script>

<style>
.all{

}
</style>