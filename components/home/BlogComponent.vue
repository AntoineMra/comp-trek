<template>
  <section class="px-12 md:px-32 py-12 secondary-bg">
    <div class="py-8 z-10">
      <h2 class="text-xl md:text-3xl font-bold text-center">
        À la recherche du meilleur équipement outdoor pour votre prochaine
        aventure ?
      </h2>

      <p class="pt-6 lg:pt-8 lg:px-16">
        Nous comparons les meilleurs produits du marché afin que vous puissiez
        trouver l'équipement idéal pour vos besoins. Que vous soyez un
        randonneur chevronné ou que vous débutiez, nous avons quelque chose pour
        tout le monde. Visitez notre blog dès aujourd'hui et commencez à
        planifier votre prochaine aventure !
      </p>
      <div
        class="flex flex-col lg:flex-row justify-center lg:justify-between pt-16"
      >
        <div>
          <h3 class="text-lg md:text-2xl font-bold">
            Notre blog regorge d'informations utiles :
          </h3>
          <ul class="pt-8">
            <li class="text-lg py-2">
              <b>Tests de produits:</b> Nous comparons les derniers équipements
              outdoor pour que vous puissiez prendre une décision éclairée sur
              ce qu'il faut acheter.
            </li>
            <li class="text-lg py-2">
              <b>Guides d'équipement:</b> Nous fournissons des conseils
              d'experts sur la façon de choisir le bon équipement pour vos
              besoins.
            </li>
            <li class="text-lg py-2">
              <b>Trucs et astuces:</b> Nous partageons nos trucs et astuces
              préférés pour tirer le meilleur parti de votre équipement outdoor.
            </li>
          </ul>
          <div class="pt-4 text-center lg:text-left">
            <NuxtLink to="/blog" class="btn btn-secondary">
              Découvrir
            </NuxtLink>
          </div>
        </div>
        <div class="mt-16 lg:mt-0 lg:mx-8 w-full lg:w-1/2 mx-auto">
          <img
            src="@/assets/hiker-grinding-trail.jpg"
            alt="Hiker"
            class="w-full h-96 object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.secondary-bg {
  background-color: rgba(253, 186, 116, 0.4);
}
</style>
