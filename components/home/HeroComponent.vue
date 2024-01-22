<template>
  <div class="hero min-h-screen lg:min-h-80 lg:py-16">
    <div class="hero-content flex-col lg:flex-row">
      <div>
        <h1
          class="text-4xl md:text-5xl font-bold text-center md:text-left pt-8 px-4 md:p-0 md:w-4/5"
        >
          Comparez les meilleurs équipements outdoor pour vos aventures !
        </h1>
        <p class="py-6 px-4 md:px-0">
          Débloquez des aventures sans effort avec notre comparateur de
          produits, gagnez du temps et faites des choix d'équipements simplement
          !
        </p>
        <div class="w-full flex justify-center md:justify-start">
          <NuxtLink to="/categories" class="btn btn-primary">
            Découvrir
          </NuxtLink>
        </div>
      </div>
      <div class="mx-8 mt-6">
        <div class="carousel rounded-box">
          <div class="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              class="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
          <div class="carousel-item w-full">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              class="w-full"
              alt="Tailwind CSS Carousel component"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
  background: linear-gradient(to bottom right, #a3e635, #fdba74);
  filter: blur(45px);
  opacity: 0.2;
}
</style>
