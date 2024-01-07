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
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '../components/layout/AppHeader.vue'

defineComponent({
  name: 'IndexComponent',
})
</script>