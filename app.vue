<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from "./components/layout/AppHeader.vue";
import AppFooter from "./components/layout/AppFooter.vue";

const title = ref("Comp Trek");
</script>
