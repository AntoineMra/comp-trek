<template>
  <AppHeader />
  <main>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
    <div class="p-4">
    <button class="btn">Hello daisyUI</button>
  </div>
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