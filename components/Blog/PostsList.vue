<template>
  <div class="post-list">
    <div class="container">
      <div class="posts__wrapper">
        <PostPreview
          v-for="post in posts" :key="post.id"
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
    }
  }
}
</script>

<style scoped>

</style>
