<template>
  <div class="recommend">
      <my-swiper
        :swiper-list="swiperList"
      />


  </div>
</template>

<script>
import MySwiper from '@/components/MySwiper.vue'
export default {
  data() {
    return {
      swiperList: []
    }
  },
  methods: {
    async fetchSwiperList() {
      const res = await this.$http.get('/banner');
      this.swoperList = res.data.data.map(item =>({img: item.pic_info.url}));
    }
  },
  
  components: {
    MySwiper
  }
}
</script>

<style>

</style>