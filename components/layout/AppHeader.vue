<!-- eslint-disable max-len -->
<template>
  <header>
    <div
      class="navbar bg-base-100 px-5 sm:px-20 sm:flex-row flex flex-col justify-center"
    >
      <div class="flex-1">
        <LogoIcon class="w-20 h-20" />
        <NuxtLink to="/" class="text-3xl font-bold text-center sm:text-left"
          >Comp Trek</NuxtLink
        >
      </div>
      <nav class="flex-none">
        <ul class="menu menu-horizontal px-1 sm:pr-8">
          <li class="px-2">
            <NuxtLink class="font-semibold" to="/products">Produits</NuxtLink>
          </li>
          <li class="px-2">
            <NuxtLink class="font-semibold" to="/kits">Kits & Packs</NuxtLink>
          </li>
          <li class="px-2">
            <NuxtLink class="font-semibold" to="/blog">Blog</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import LogoIcon from "../UI/LogoIcon.vue";
</script>

<style scoped></style>
