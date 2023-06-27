<template>
  <div>
    <nuxt-link :to="/blog/+post.id" class="post-preview">
      <img :src="post.img" :alt="post.title">
      <div class="post-content">
        <h3 class="title"> {{ post.title }} </h3>
        <p> {{ post.description }} </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
