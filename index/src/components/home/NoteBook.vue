<template>
  <div>
      <div @click="_getAllFolder">222</div>
  </div>
</template>

<script>
import { getAllFolder, list, login } from "@/request/api/note";
export default {
     name: "notebook",
  data() {
    return {
    };
  },
  methods: {
    _getAllFolder(){
        let str =  sessionStorage.getItem('token')
        console.log(str)
        getAllFolder(),then((res=>{
              console.log(res)
        }))
    },
  },
}
</script>

<style>

</style>