<template>
  <footer class="footer md:grid flex flex-wrap p-10 text-neutral-content">
    <nav class="mx-auto">
      <header class="text-primary text-lg font-bold">Comparateur</header>
      <NuxtLink to="/categories" class="link link-hover">Catégories</NuxtLink>
      <NuxtLink to="/products" class="link link-hover">Produits</NuxtLink>
      <NuxtLink to="/kits" class="link link-hover">Kits</NuxtLink>
    </nav>
    <nav class="mx-auto">
      <header class="text-primary text-lg font-bold">Comp Trek</header>
      <NuxtLink to="/cookies" class="link link-hover">A propos</NuxtLink>
      <NuxtLink to="/contact" class="link link-hover">Contact</NuxtLink>
      <NuxtLink to="/blog" class="link link-hover">Blog</NuxtLink>
    </nav>
    <nav class="mx-auto">
      <header class="text-primary text-lg font-bold">
        Informations légales
      </header>
      <NuxtLink to="/mentions-legales" class="link link-hover"
        >Mentions générales</NuxtLink
      >
      <NuxtLink to="/politique-de-confidentialite" class="link link-hover"
        >Politique de confidentialité</NuxtLink
      >
      <NuxtLink to="/affiliate" class="link link-hover">Affiliation</NuxtLink>
      <NuxtLink to="/cookies" class="link link-hover">Cookies</NuxtLink>
    </nav>
    <form>
      <header class="text-primary text-lg font-bold">Newsletter</header>
      <fieldset class="form-control w-80">
        <label class="label" for="newsletter">
          <span class="label-text">Recevez nos derniers comparatifs !</span>
        </label>
        <div class="join">
          <input
            id="newsletter"
            type="text"
            placeholder="john.doe@gmail.com"
            class="input input-bordered join-item"
          />
          <button
            class="btn btn-primary join-item"
            @submit="addToNewsletter"
            type="submit"
          >
            S'abonner
          </button>
        </div>
      </fieldset>
    </form>
  </footer>
</template>

<script setup lang="ts">
const addToNewsletter = () => {
  // Implement Mailchimp API
  console.log("addToNewsletter");
};
</script>

<style scoped>
.footer {
  background-color: rgb(240, 242, 250);
}
</style>
