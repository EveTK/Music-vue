<template>
  <div class="main">
    <main-header
      title="Function music"
      @nav-click="toPath"
    />

    <router-view></router-view>
  </div>
  
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'

export default {
  methods: {
    toPath(path){
      this.$router.push(path);
    }
  },
  components: {
    MainHeader
  }
}

</script>
