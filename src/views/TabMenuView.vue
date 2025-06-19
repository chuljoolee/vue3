<template>
  <TabMenu>
    <!-- 탭 메뉴 영역 -->
    <template #headers="{ activeIndex, setActive }">
      <ul class="custom-tabs">
        <li :class="{ active: activeIndex === 0 }" @click="setActive(0)">메뉴1</li>
        <li :class="{ active: activeIndex === 1 }" @click="setActive(1)">메뉴2</li>
        <li :class="{ active: activeIndex === 2 }" @click="setActive(2)">메뉴3</li>
      </ul>
    </template>

    <!-- 탭 컨텐츠 영역 -->
    <template #contents="{ activeIndex }">
      <div v-show="activeIndex === 0">탭 1의 내용입니다.</div>
      <div v-show="activeIndex === 1">탭 2의 내용입니다.</div>
      <div v-show="activeIndex === 2">탭 3의 내용입니다.</div>
    </template>
  </TabMenu>
</template>

<script setup>
import TabMenu from '@/components/ui/tab/TabMenu.vue'
</script>

<style scoped lang="scss">
.custom-tabs {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    padding: 10px 20px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    &.active {
      border-bottom-color: #007acc;
      color: #007acc;
      font-weight: bold;
    }
  }
}
</style>