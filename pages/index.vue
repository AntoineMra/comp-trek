<template>
  <main>
    <HeroComponent />
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import HeroComponent from "../components/HeroComponent.vue";

defineComponent({
  name: "IndexComponent",
});
</script>
