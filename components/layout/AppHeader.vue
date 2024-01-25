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
            <NuxtLink class="font-semibold" to="products">Produits</NuxtLink>
          </li>
          <li class="px-2">
            <NuxtLink class="font-semibold" to="kits">Kits & Packs</NuxtLink>
          </li>
          <li class="px-2">
            <NuxtLink class="font-semibold" to="blog">Blog</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="py-4 w-full flex justify-center items-center sm:hidden">
      <div class="form-control">
        <input
          type="text"
          placeholder="Search"
          class="input input-bordered w-40"
        />
      </div>
    </div>
    <div class="hidden sm:block">
      <nav class="flex items-center justify-center py-4">
        <ul class="menu menu-vertical sm:menu-horizontal px-1">
          <li v-for="mock in categories" :key="mock.id" class="px-2">
            <NuxtLink class="font-bold" :to="`categories/${mock.id}`">
              {{ mock.attribute.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <aside class="navbar bg-base-100 justify-center items-center">
      <p class="font-sm px-4 sm:p-0 sm:flex-row flex flex-col">
        Vous apportez un point de vue de qualité est notre mission.
        L’utilisation des liens d’affiliations nous permet d’améliorer en
        continue nos analyses.
        <NuxtLink to="affiliate" class="font-bold my-2 sm:my-0">
          En savoir plus >
        </NuxtLink>
      </p>
    </aside>
  </header>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import LogoIcon from "../UI/LogoIcon.vue";

const categories = ref([
  { id: 1, attribute: { name: "Catégorie 1", slug: "categorie-1" } },
  { id: 2, attribute: { name: "Catégorie 2", slug: "categorie-2" } },
]);

onBeforeMount(() => {
  fetch(`${process.env.BASE_URL}/categories`)
    .then((res) => res.json())
    .then((data) => {
      categories.value = data;
    });
});
</script>

<style scoped></style>
