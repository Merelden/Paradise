<template>
  <div class="wrapper">
    <Header></Header>
    <section
      class="hero flex justify-center items-center gap-5 h-[600px] bg-[url('~/static/images/aboutHeroPoster.jpg')]">
      <Intro title="Hey we`re Paradise. See our thoughts, stories and ideas."/>
      <p class="hero-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, repellat!</p>
    </section>
  </div>
</template>

<script>
import Intro from "~/components/UI/Intro";
export default {
  components: { Intro }
}
</script>

<style scoped>

</style>
