<template>
  <main class="mx-10 my-5 lg:mx-80 lg:my-10 md:glass md:rounded">
    <header class="md:py-4 md:px-16">
      <AppBreadcrumb :breadcrumbItem="breadcrumb" />
      <h1 class="text-2xl md:text-3xl lg:text-4xl font-bold text-primary pt-6">
        Vous apportez un point de vue de qualité est notre mission
      </h1>
    </header>

    <section class="max-w-2xl md:max-w-none mx-auto my-8 md:p-8">
      <p class="mb-4">
        L’utilisation des liens d’affiliations nous permet d’améliorer en
        continue nos analyses.
      </p>

      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Qu'est-ce qu'un lien affilié ?
      </h2>
      <p class="mb-4">
        Un lien affilié est un lien spécial qui contient un identifiant unique,
        permettant de gagner une commission lorsque les utilisateurs cliquent
        sur ce lien et effectuent un achat ou une action spécifique sur le site
        partenaire.
      </p>

      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Comment fonctionnent nos liens affiliés ?
      </h2>
      <p class="mb-4">
        Nous sélectionnons soigneusement des partenaires et des produits que
        nous croyons être pertinents et de qualité. Lorsque vous cliquez sur nos
        liens affiliés et effectuez un achat, cela peut générer une commission.
        Ces commissions sont pour nous le moyen de garantir un site de qualité
        et de continuer à vous proposer des analyses pertinentes.
      </p>
      <p class="mb-4">
        Fournir des liens d’affiliation est un service pour nos utilisateurs et
        permet de développer une relation équitable pour tous.
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
import AppBreadcrumb from "../components/layout/AppBreadcrumb.vue";

defineComponent({
  name: "AffiliateComponent",
});

const breadcrumb = [
  {
    name: "Accueil",
    path: "/",
    order: 1,
  },
  {
    name: "Affiliation",
    path: "/affiliate",
    order: 2,
  },
];
</script>

<style scoped></style>
