<!-- eslint-disable max-len -->
<template>
  <section class="px-12 md:px-32 py-12 secondary-bg">
    <div class="py-8 z-10">
      <h2 class="text-xl md:text-3xl font-bold text-center">
        Nos derniers articles sont disponibles ici !
      </h2>
    </div>

    <div>
      <p></p>
      <NuxtLink to="/blog" class="btn btn-secondary"> Découvrir </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.secondary-bg {
  background-color: rgba(253, 186, 116, 0.4);
}
</style>
