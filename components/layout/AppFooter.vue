<template>
  <footer class="footer md:grid flex flex-wrap p-10 text-neutral-content">
    <nav class="mx-auto">
      <header class="text-primary text-lg font-bold">Produits</header>
      <NuxtLink to="/cookies" class="link link-hover">Branding</NuxtLink>
      <NuxtLink to="/cookies" class="link link-hover">Design</NuxtLink>
      <NuxtLink to="/cookies" class="link link-hover">Marketing</NuxtLink>
      <NuxtLink to="/cookies" class="link link-hover">Advertisement</NuxtLink>
    </nav>
    <nav class="mx-auto">
      <header class="text-primary text-lg font-bold">Contact</header>
      <NuxtLink to="/cookies" class="link link-hover">A propos</NuxtLink>
      <NuxtLink to="/cookies" class="link link-hover">Support</NuxtLink>
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
    </nav>
    <form>
      <header class="footer-title">Newsletter</header>
      <fieldset class="form-control w-80">
        <label class="label">
          <span class="label-text">Enter your email address</span>
        </label>
        <div class="join">
          <input
            type="text"
            placeholder="username@site.com"
            class="input input-bordered join-item"
          />
          <button class="btn btn-primary join-item">S'abonner</button>
        </div>
      </fieldset>
    </form>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
.footer {
  background-color: rgb(240, 242, 250);
}
</style>
