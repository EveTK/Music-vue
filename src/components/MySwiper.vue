<template>
  <div class="my-swiper">
      swiper
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue awesome swiper'

export default {
    props: {
        swiperList: {
            type: Array,
            resquird: true
        }
    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>

<style>

</style>