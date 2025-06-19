<template>
  <swiper v-bind="swiperOptions" class="my-swiper">
    <slot />
  </swiper>
</template>

<script>
import { Swiper } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default {
  components: {
    Swiper,
  },
  props: {
    swiperOptions: {
      type: Object,
      default: () => ({
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          clickable: true,
        },
        navigation: true,
      }),
    },
  },
  setup(props) {
    return {
      swiperOptions: props.swiperOptions,
    }
  },
}
</script>

<style scoped>
.my-swiper {
  width: 100%;
  height: 100%;
}
.my-swiper div {
  color:#eee;
}
.swiper-slide {
  color: #222;
}
</style>
