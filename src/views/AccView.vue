<!-- ParentComponent.vue -->
<script setup>
import Accordion from '@/components/ui/accordion/Accordion.vue'
import AccordionItem from '@/components/ui/accordion/AccordionItem.vue'
</script>

<template>
  <Accordion>
    <AccordionItem>
      <template #title>첫 번째 항목</template>
      <p>이것은 첫 번째 콘텐츠입니다.</p>
    </AccordionItem>

    <AccordionItem>
      <template #title>두 번째 항목</template>
      <ul>
        <li>리스트 1</li>
        <li>리스트 2</li>
      </ul>
    </AccordionItem>

    <!-- 원하는 만큼 추가 가능 -->
  </Accordion>
</template>