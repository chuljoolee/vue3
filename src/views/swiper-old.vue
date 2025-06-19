<template>
  <SwiperComponent :swiperOptions="customOptions">
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="p-4 text-white bg-blue-500 text-center">
        {{ slide }}
      </div>
    </swiper-slide>
  </SwiperComponent>
</template>

<script setup>
import SwiperComponent from '@/components/ui/swiper/SwiperComponent.vue'
import { SwiperSlide } from 'swiper/vue'

const slides = ['Slide 1', 'Slide 2', 'Slide 3']

const customOptions = {
  slidesPerView: 2,
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
  },
  navigation: true,
}
</script>
