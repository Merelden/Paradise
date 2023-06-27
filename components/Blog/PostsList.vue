<template>
  <div class="post-list flex justify-center mt-24 mb-36">
    <div class="container">
      <div class="posts__wrapper flex gap-10">
        <PostPreview
          v-for="post in posts" :key="post.id"
          :admin="admin"
          :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from "./PostPreview";
export default {
  components: {
    PostPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>

</style>
