<template>
  <main>
    <AffiliateHeader />
    <div class="mt-16 mb-8">
      <h1 class="mx-8 text-4xl font-bold text-center">
        Bienvenue sur notre blog !
      </h1>
      <p class="mx-4 py-8 text-md">
        Venez découvrir notre univers en plongeant des nos articles pour
        découvrir le monde de la randonnée et du trekking.
      </p>
    </div>

    <div class="w-3/4 md:1/2 pt-8 mx-auto">
      <h2 class="text-3xl font-bold">Notre dernier article</h2>

      <div class="card w bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            :src="lastArticle.image"
            alt="Mock"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <p class="text-sm text-gray-500">Randonnée</p>
          <div class="card-actions justify-end">
            <p class="text-sm text-gray-500">Lire la suite</p>
          </div>
        </div>
      </div>
      <div class="card shadow-lg">
        <div class="card-body">
          <h2 class="card-title">
            Comment choisir son sac à dos de randonnée ?
          </h2>
          <p class="text-sm text-gray-500">Randonnée</p>
        </div>
      </div>
    </div>

    <AppPagination
      @next-page="() => page++"
      @previous-page="() => page--"
      :articles="articles"
    />
  </main>
</template>

<script setup lang="ts">
import { defineComponent, onBeforeMount, ref } from "vue";
import AppPagination from "../components/layout/AppPagination.vue";
import AffiliateHeader from "../components/UI/AffiliateHeader.vue";

defineComponent({
  name: "BlogComponent",
});

const page = ref<number>(1);
const articles = ref<any[]>([]);
const lastArticle = ref<any>([]);

onBeforeMount(async () => {
  const response = await fetch(
    `http://localhost:1337/api/articles?page=${page.value}`,
  );
  const json = await response.json();

  articles.value = json.data;

  lastArticle.value = articles.value.slice(-1);
});
</script>
