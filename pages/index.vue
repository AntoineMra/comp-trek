<template>
  <main>
    <div class="hidden sm:block">
      <nav class="flex items-center justify-center py-4">
        <ul class="menu menu-vertical sm:menu-horizontal px-1">
          <li v-for="mock in categories" :key="mock.id" class="px-2">
            <NuxtLink class="font-bold" :to="`categories/${mock.id}`">
              {{ mock.attributes.name }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
    <aside
      class="navbar bg-base-100 flex justify-center items-center flex-col md:flex-row"
    >
      <p class="font-sm pt-2 px-2 md:p-0">
        Vous apportez un point de vue de qualité est notre mission.
        L’utilisation des liens d’affiliations nous permet d’améliorer en
        continue nos analyses.
      </p>
      <NuxtLink to="affiliate" class="block md:inline font-bold py-2 md:pl-2"
        >En savoir plus ></NuxtLink
      >
    </aside>
    <HeroComponent />
    <TopProductsComponent />
    <BlogComponent />
    <ReinsuranceComponent />
  </main>
</template>

<script setup lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import HeroComponent from "../components/home/HeroComponent.vue";
import TopProductsComponent from "../components/home/TopProductsComponent.vue";
import BlogComponent from "../components/home/BlogComponent.vue";
import ReinsuranceComponent from "../components/home/ReinsuranceComponent.vue";

defineComponent({
  name: "IndexComponent",
});

const categories = ref<any[]>([]);

onBeforeMount(() => {
  fetch(`http://localhost:1337/api/categories`)
    .then((res) => res.json())
    .then((res) => {
      categories.value = res.data;
    });
});
</script>
