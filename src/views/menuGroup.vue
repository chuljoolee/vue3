<template>
  <ButtonMenu id="mainMenu" name="menuGroup" customClass="my-custom-class">
  <ButtonMenuItem :index="0" customClass="menu1">메뉴 1</ButtonMenuItem>
  <ButtonMenuItem :index="1" customClass="menu2">메뉴 2</ButtonMenuItem>
  <ButtonMenuItem :index="2" customClass="menu3">메뉴 3</ButtonMenuItem>
</ButtonMenu>
</template>

<script setup>
import ButtonMenu from '@/components/ui/button/ButtonMenu.vue';
import ButtonMenuItem from '@/components/ui/button/ButtonMenuItem.vue';

</script>