<template>
  <div class="card bg-base-100 shadow-xl">
    <figure class="w-full">
      <img
        :src="props.article?.image?.data?.attributes?.url"
        :alt="props.article.title"
        class="w-full"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ props.article.title }}</h2>
      <p>{{ props.article.description }}</p>
      <p class="text-sm text-gray-500">{{ props.article.category }}</p>
      <div class="card-actions justify-end">
        <a :href="`articles/${props.article.id}`" class="text-sm text-gray-500"
          >Lire la suite</a
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});
</script>
