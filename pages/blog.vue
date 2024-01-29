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
    <div class="mt-16 mb-8">
      <h1 class="text-4xl font-bold text-center">Bienvenue sur notre blog !</h1>
      <p>
        Venez découvrir notre univers en plongeant des nos articles pour
        découvrir le monde de la randonnée et du trekking.
      </p>
    </div>

    <div class="">
      <h2>Notre dernière article</h2>

      <div class="card shadow-lg">
        <div class="card-body">
          <h2 class="card-title">
            Comment choisir son sac à dos de randonnée ?
          </h2>
          <p class="text-sm text-gray-500">Randonnée</p>
        </div>
      </div>
    </div>

    <AppPagination :articles="articles" />
  </main>
</template>

<script setup lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import AppPagination from "../components/layout/AppPagination.vue";

defineComponent({
  name: "BlogComponent",
});

const articles = ref<any[]>([]);

onBeforeMount(async () => {
  const response = await fetch(`http://localhost:1337/api/articles`);
  const json = await response.json();

  articles.value = json.data;
});
</script>
