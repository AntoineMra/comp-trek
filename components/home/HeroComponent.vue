<!-- eslint-disable max-len -->
<template>
  <div
    class="hero min-h-screen lg:min-h-screen lg:py-16"
    :style="{
      backgroundImage: `url(${bg})`,
    }"
  >
    <div class="hero-content z-10 flex-col lg:flex-row">
      <div class="w-full">
        <h1
          class="text-4xl text-white md:text-5xl font-bold text-center md:text-left pt-8 px-4 md:p-0 md:w-4/5 md:leading-[3.6rem]"
        >
          Comparez les meilleurs équipements outdoor pour vos aventures !
        </h1>
        <p class="py-6 px-4 text-white md:px-0">
          Débloquez des aventures sans effort avec notre comparateur de
          produits, gagnez du temps et faites des choix d'équipements simplement
          !
        </p>
        <div class="w-full flex justify-center md:justify-start">
          <NuxtLink to="/categories" class="btn text-white btn-primary">
            Découvrir
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bg from "@/assets/hero-backpacker.png";
</script>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.hero::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.5;
  z-index: -1;
}

.hero::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.65),
    rgba(0, 0, 0, 0.65)
  );
}
</style>
