<template>
  <main>
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
    <h1>TODO BLOG</h1>
    <TopProductsComponent />
    <BlogComponent />
    <ReinsuranceComponent />
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import TopProductsComponent from "../components/home/TopProductsComponent.vue";
import BlogComponent from "../components/home/BlogComponent.vue";
import ReinsuranceComponent from "../components/home/ReinsuranceComponent.vue";

defineComponent({
  name: "IndexComponent",
});
</script>
