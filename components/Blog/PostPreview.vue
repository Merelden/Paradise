<template>
  <div>
    <nuxt-link :to="getLink" class="post-preview text-center">
      <img :src="post.img" :alt="post.title" class="rounded-lg  w-full h-auto">
      <div class="post-content">
        <h3 class="title pt-5"> {{ post.title }} </h3>
        <p class="text pt-5"> {{ post.description }} </p>
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
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLink () {
      return this.admin ? `/admin/${this.post.id}` : `/blog/${this.post.id}`
    }
  }
}
</script>

<style scoped>

</style>
