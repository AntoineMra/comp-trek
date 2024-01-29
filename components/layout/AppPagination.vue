<template>
  <div class="my-8 w-1/4 mx-auto">
    <nav class="join grid grid-cols-2">
      <button
        class="join-item btn btn-secondary btn-outline"
        :class="isFirstPage() ? 'btn-disabled' : ''"
        @click="previousPage()"
      >
        Précédent
      </button>
      <button
        class="join-item btn btn-secondary btn-outline"
        :class="isLastPage() ? 'btn-disabled' : ''"
        @click="nextPage()"
      >
        Suivant
      </button>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from "vue";

const page = ref(1);

const isFirstPage = () => page.value === 1;
const isLastPage = () => page.value === props.articles.length;

const nextPage = () => {
  if (!isLastPage()) {
    page.value += 1;
  }
};

const previousPage = () => {
  if (!isFirstPage()) {
    page.value -= 1;
  }
};

const emit = defineEmits(["nextPage", "previousPage"]);

const props = defineProps({
  articles: {
    type: Array as PropType<any[]>,
    required: true,
  },
});
</script>
