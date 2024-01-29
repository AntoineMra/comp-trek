<!-- eslint-disable max-len -->
<template>
  <section class="px-12 md:px-32 py-12" v-if="showableProducts.length !== 0">
    <div class="py-8">
      <h2 class="text-xl md:text-3xl font-bold text-center">
        Découvrez nos produits les mieux notés !
      </h2>
    </div>
    <nav w-40 mx-auto>
      <ul class="flex flex-wrap justify-center items-center">
        <li class="px-4" v-for="category in categories" :key="category">
          <button
            class="btn"
            @click="selectCategory(category)"
            :class="selected === category ? 'btn-primary' : 'btn-ghost'"
          >
            {{ category }}
          </button>
        </li>
      </ul>
    </nav>

    <div
      class="min-h-40 w-1/2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 transition-all"
    >
      <div
        class="card shadow-lg"
        v-for="product in showableProducts"
        :key="product.name"
      >
        <div class="card-body" v-if="product.category === selected">
          <h2 class="card-title">{{ product.name }}</h2>
          <p class="text-sm text-gray-500">{{ product.category }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

const categories = ref<string[]>([]);
const products = ref<any[]>([]);
const showableProducts = ref<any[]>([]);

const selected = ref("");

const selectCategory = (category: string) => {
  selected.value = category;
  showableProducts.value = products.value
    .filter((product) => product.category === selected.value)
    .slice(0, 3);
};

onBeforeMount(async () => {
  const response = await fetch(`http://localhost:1337/api/categories`);
  const json = await response.json();
  categories.value = json.data.map((category: any) => category.attributes.name);

  const responseProducts = await fetch(`http://localhost:1337/api/products`);
  const jsonProducts = await responseProducts.json();
  products.value = jsonProducts.data.map((product: any) => ({
    category: product.attributes.category,
    name: product.attributes.name,
    rating: product.attributes.rating,
  }));

  selected.value = categories.value[0];

  showableProducts.value = products.value
    .filter((product) => product.category === selected.value)
    .slice(0, 3);
});
</script>

<style scoped></style>
