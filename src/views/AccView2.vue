<script setup>
import Accordion from '@/components/ui/accordion/Accordion2.vue'
import AccordionItem from '@/components/ui/accordion/AccordionItem2.vue'
</script>

<template>
  <Accordion>
    <AccordionItem :index="0">
      <template #title>첫 번째</template>
      <p>첫 번째 콘텐츠입니다.</p>
    </AccordionItem>

    <AccordionItem :index="1">
      <template #title>두 번째</template>
      <p>두 번째 콘텐츠입니다.</p>
    </AccordionItem>

    <AccordionItem :index="2">
      <template #title>세 번째</template>
      <p>세 번째 콘텐츠입니다.</p>
    </AccordionItem>
  </Accordion>
</template>
