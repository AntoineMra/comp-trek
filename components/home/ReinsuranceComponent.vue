<template>
  <div class="py-20 px-40">
    <div class="text-4xl text-center">
      <h2>Les différentes marques prise en compte</h2>
    </div>

    <div v-if="brands.length !== 0" class="mx-40 py-12 flex justify-center">
      <div v-for="brand in brands" :key="brand.name" class="px-6">
        <a :href="brand.url" target="_blank">
          <img class="h-16 w-16" :src="brand.image" :alt="brand.name" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from "vue";

const brands = ref<any[]>([
  {
    name: "Mock",
    image:
      "https://gitlab.com/uploads/-/system/user/avatar/12434678/avatar.png?width=96",
    url: "https://gitlab.com/",
  },
  {
    name: "Mock",
    image:
      "https://gitlab.com/uploads/-/system/user/avatar/12434678/avatar.png?width=96",
    url: "https://gitlab.com/",
  },
  {
    name: "Mock",
    image:
      "https://gitlab.com/uploads/-/system/user/avatar/12434678/avatar.png?width=96",
    url: "https://gitlab.com/",
  },
  {
    name: "Mock",
    image:
      "https://gitlab.com/uploads/-/system/user/avatar/12434678/avatar.png?width=96",
    url: "https://gitlab.com/",
  },
  {
    name: "Mock",
    image:
      "https://gitlab.com/uploads/-/system/user/avatar/12434678/avatar.png?width=96",
    url: "https://gitlab.com/",
  },
]);

onBeforeMount(async () => {
  const response = await fetch(`http://localhost:1337/api/brands`);
  const json = await response.json();
  brands.value = json.data.map((brand: any) => brand.attributes);
});
</script>

<style scoped></style>
