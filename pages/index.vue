<template>
  <main>
    <aside class="navbar bg-base-100 flex justify-center items-center">
      <p class="font-sm">
        Vous apportez un point de vue de qualité est notre mission.
        L’utilisation des liens d’affiliations nous permet d’améliorer en
        continue nos analyses.
        <NuxtLink to="affiliate" class="font-bold pl-2"
          >En savoir plus ></NuxtLink
        >
      </p>
    </aside>
    <HeroComponent />
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";
import HeroComponent from "../components/HeroComponent.vue";

defineComponent({
  name: "IndexComponent",
});
</script>
