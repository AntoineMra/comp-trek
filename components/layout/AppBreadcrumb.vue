<template>
  <div class="text-sm breadcrumbs">
    <ul>
      <li v-for="item in props.breadcrumbItem" :key="item.order">
        <NuxtLink
          :to="item.path"
          class="link-primary"
          v-if="item.order !== props.breadcrumbItem.length"
          >{{ item.name }}</NuxtLink
        >
        <span v-else>
          {{ item.name }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, PropType } from "vue";
import type { BreadcrumbItem } from "../../interface/ui";

const orderBreadcrumb = (breadcrumbItem: BreadcrumbItem[]) => {
  return breadcrumbItem.sort((a, b) => a.order - b.order);
};

const props = defineProps({
  breadcrumbItem: {
    type: Array as PropType<BreadcrumbItem[]>,
    required: true,
  },
});

onBeforeMount(() => {
  orderBreadcrumb(props.breadcrumbItem);
});
</script>
