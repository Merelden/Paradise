<template>
  <header class="flex justify-around items-center py-5">
    <Logo></Logo>
    <ul class="navbar-list">
      <li class="navbar-item" v-for="link in links" :key="link.title">
        <nuxt-link class="navbar-link" :to="link.url" :title="link.title">{{ link.title }}</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
import Logo from "~/components/Icons/Logo";

export default {
  data() {
    return {
      links: [
        {title: 'Home', url: '/'}
      ]
    }
  },
  components: {Logo}
}
</script>

<style scoped>

</style>
