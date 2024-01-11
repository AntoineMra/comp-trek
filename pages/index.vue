<template>
  <AppHeader />
  <main class="app">
    <h1 class="text-primary text-3xl font-bold underline">
      Hello world!
    </h1>
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'

defineComponent({
  name: 'IndexComponent',
})
</script>