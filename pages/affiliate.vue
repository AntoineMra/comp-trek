<template>
  <main>
    <header class="bg-blue-500 text-white py-4">
      <h1 class="text-2xl md:text-3xl lg:text-4xl">
        Vous apportez un point de vue de qualité est notre mission
      </h1>
    </header>

    <section
      class="max-w-2xl mx-auto my-8 p-4 md:p-8 bg-white shadow-md rounded-md"
    >
      <p class="mb-4">
        L’utilisation des liens d’affiliations nous permet d’améliorer en
        continue nos analyses.
      </p>

      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Qu'est-ce qu'un lien affilié ?
      </h2>
      <p class="mb-4">
        Un lien affilié est un lien spécial qui contient un identifiant unique,
        permettant à notre organisation de gagner une commission lorsque les
        utilisateurs cliquent sur ce lien et effectuent un achat ou une action
        spécifique sur le site partenaire.
      </p>

      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Comment fonctionnent nos liens affiliés ?
      </h2>
      <p class="mb-4">
        Nous sélectionnons soigneusement des partenaires et des produits que
        nous croyons être pertinents et de qualité. Lorsque vous cliquez sur nos
        liens affiliés et effectuez un achat, cela peut générer une commission
        pour notre organisation, ce qui soutient nos efforts dans la fourniture
        de perspectives de qualité.
      </p>

      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Transparence
      </h2>
      <p class="mb-4">
        Nous croyons en la transparence. Chaque fois que vous cliquez sur un
        lien affilié sur notre site, nous le signalerons clairement. Cette
        transparence est essentielle pour nous, car elle renforce la confiance
        que vous placez en nous.
      </p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "AffiliateComponent",
});
</script>

<style scoped></style>
