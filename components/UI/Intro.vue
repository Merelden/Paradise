<template>
  <section class="intro w-full my-9 text-center">
    <div class="container">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

</style>
