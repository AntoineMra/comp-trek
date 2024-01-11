<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../components/layout/AppHeader.vue";
import AppFooter from "../components/layout/AppFooter.vue";

defineComponent({
  name: "DefaultLayout",
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>
