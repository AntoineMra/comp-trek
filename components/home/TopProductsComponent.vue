<!-- eslint-disable max-len -->
<template>
  <section class="px-12 md:px-32">
    <div class="py-8">
      <h2 class="text-xl md:text-3xl font-bold text-center">
        Découvrez nos produits les mieux notés !
      </h2>
    </div>
    <nav w-40 mx-auto>
      <ul class="flex flex-wrap justify-center items-center">
        <li class="px-4" v-for="category in categories" :key="category">
          <btn
            class="btn"
            @click="selectCategory(category)"
            :class="selected === category ? 'btn-primary' : 'btn-ghost'"
          >
            {{ category }}
          </btn>
        </li>
      </ul>
    </nav>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
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
  //const response = await fetch('http://localhost:3000/api/categories');
  //categories.value = await response.json();

  categories.value = [
    "Tentes",
    "Sacs de randonnée",
    "Sacs de couchage",
    "Matelas",
  ];

  products.value = [
    {
      category: "Tentes",
      name: "Tente 1",
      rating: 4,
    },
    {
      category: "Tentes",
      name: "Tente 2",
      rating: 4,
    },
    {
      category: "Tentes",
      name: "Tente 3",
      rating: 4,
    },
    {
      category: "Matelas",
      name: "Matelas 1",
      rating: 4,
    },
    {
      category: "Matelas",
      name: "Matelas 2",
      rating: 4,
    },
    {
      category: "Matelas",
      name: "Matelas 3",
      rating: 4,
    },
  ];

  selected.value = categories.value[0];

  showableProducts.value = products.value
    .filter((product) => product.category === selected.value)
    .slice(0, 3);
});
</script>

<style scoped></style>
