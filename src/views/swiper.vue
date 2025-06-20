<template>
  <SwiperComponent :swiperOptions="swiperOptions">
    <swiper-slide>
      <div class="bg-red-500 text-black p-8 text-center"> 1</div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-green-500 text-black p-8 text-center"> 2</div>
    </swiper-slide>
    <swiper-slide>
      <div class="bg-blue-500 text-black p-8 text-center"> 3</div>
    </swiper-slide>
  </SwiperComponent>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue'
import SwiperComponent from '@/components/ui/swiper/SwiperComponent.vue'


const swiperOptions = {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  pagination: { clickable: true },
  navigation: true,
}
</script>
<style>
.swiper-slide {
  color: #222;
}
</style>

