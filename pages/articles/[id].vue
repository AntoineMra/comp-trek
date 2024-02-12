<template>
  <div>
    <h1>Mock</h1>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params.id);
</script>
