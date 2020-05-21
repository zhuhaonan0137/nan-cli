<template>
  <div class="about">
    <h1>This is an test page</h1>
    <button @click="showToast">显示toast</button>
    <button @click="showLoading">loading</button>
  </div>
</template>
<script>
import {demo} from '../api/index.js'
export default {
  methods: {
    showToast() {
      this.$ltToast("你好");
    },
    showLoading() {
      this.$ltLoading({ isShow: true });
      setTimeout(()=>{
        this.$ltLoading({ isShow: false });
      },1000)
    }
  },
  mounted () {
    demo({
      name:""
    }).then(res=>{

    }).catch(err=>{
      
    })
  }
};
</script>