<template>
  <main>
    <AffiliateHeader />
    <div class="mt-16 mb-8 w-3/4 md:1/2 pt-8 mx-auto">
      <h1 class="mx-8 text-4xl font-bold text-center">
        Bienvenue sur notre blog !
      </h1>
      <p class="mx-4 py-8 text-md text-center">
        Venez découvrir notre univers. Plongez dans nos articles pour découvrir
        le monde de la randonnée et du trekking. Trouvez des idées de parcours
        pour tous les niveaux, des sentiers faciles aux treks les plus
        difficiles. Explorez les plus beaux paysages du monde avec nos conseils
        et astuces.
      </p>
    </div>

    <div class="w-3/4 md:1/2 pt-8 mx-auto">
      <h2 class="text-xl text-center lg:text-left md:text-3xl font-bold pb-8">
        Notre dernier article :
      </h2>

      <div class="flex flex-col md:flex-row justify-between content-center">
        <div class="w-1/2">
          <ArticleCard :article="lastArticle.data.attributes" />
        </div>

        <div class="glass w-1/3">
          <ul class="flex justify-center content-center">
            <li class="w-1/2">
              <button class="btn">Thème 2</button>
            </li>
          </ul>
        </div>
      </div>

      <h2
        class="text-xl text-center lg:text-left md:text-3xl font-bold pb-8 pt-16"
      >
        Nos autres articles :
      </h2>
      <div class="flex justify-between align-center">
        <div>
          <ArticleCard
            v-for="article in articles"
            :key="article.data.attibutes.id"
            :article="article.data.attibutes"
          />
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
import ArticleCard from "../components/blog/ArticleCard.vue";
defineComponent({
  name: "BlogComponent",
});

const page = ref<number>(1);
const articles = ref<any[]>([]);
const lastArticle = ref<any>({
  data: {
    attributes: {
      id: 1,
      title: "Shoes !",
      description: "If a dog chews shoes whose shoes does he choose?",
      category: "Randonnée",
      image: {
        data: {
          attributes: {
            url: "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
          },
        },
      },
    },
  },
});

onBeforeMount(async () => {
  const response = await fetch(
    `http://localhost:1337/api/articles?page=${page.value}`,
  );
  const json = await response.json();

  //articles.value = json.data;

  //lastArticle.value = articles.value.slice(-1);
});
</script>
