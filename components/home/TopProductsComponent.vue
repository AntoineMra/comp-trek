<!-- eslint-disable max-len -->
<template>
  <section class="px-12 md:px-32 py-12">
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
      class="min-h-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-16 transition-all"
    >
      <div
        class="card shadow-lg"
        v-for="product in showableProducts"
        :key="product.name"
      >
        <figure>
          <img
            :src="`http://localhost:1337${product.image.data.attributes.url}`"
            :alt="product.name"
          />
        </figure>

        <div class="card-body">
          <h2 class="card-title">{{ product.name }}</h2>
          <div v-if="product.tag" class="badge badge-secondary">
            {{ product.tag }}
          </div>
          <div class="card-actions justify-between pt-6">
            <div class="badge badge-outline">
              {{ product.category.data.attributes.name }}
            </div>
            <div class="text-xl font-bold text-primary">
              {{ product.price }} €
            </div>
          </div>
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
    .filter(
      (product) => product.category.data.attributes.name === selected.value,
    )
    .slice(0, 3);
};

onBeforeMount(async () => {
  const response = await fetch(`http://localhost:1337/api/categories`);
  const json = await response.json();
  categories.value = json.data.map((category: any) => category.attributes.name);

  const responseProducts = await fetch(
    `http://localhost:1337/api/products?populate=*`,
  );
  const jsonProducts = await responseProducts.json();
  products.value = jsonProducts.data.map((product: any) => product.attributes);

  selected.value = categories.value[0];

  showableProducts.value = products.value
    .filter(
      (product) => product.category.data.attributes.name === selected.value,
    )
    .slice(0, 3);
});
</script>

<style scoped></style>
