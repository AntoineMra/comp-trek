<template>
  <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row">
      <div>
        <h1
          class="text-4xl md:text-5xl font-bold text-center md:text-left pt-8 px-4 md:p-0"
        >
          Compare the Best Outdoor Gear for Your Adventure
        </h1>
        <p class="py-6 px-4 md:px-0">
          Unlock outdoor adventures effortlessly with our product comparator –
          save time, discover exclusive deals, and make confident gear choices
          for your next expedition.
        </p>
        <NuxtLink to="categories" class="btn btn-primary"
          >Start comparing !</NuxtLink
        >
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
  height: 100vh; /* Adjust the height as needed */
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
  opacity: 0.3;
}
</style>
