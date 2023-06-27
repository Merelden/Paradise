<template>
  <div class="wrapper">
    <Header />
    <!-- content -->
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin Page">
        <nuxt-link to="/admin" class="link linkWhite"> Admin </nuxt-link>
        <nuxt-link to="/admin/new-post" class="link linkWhite"> New Post </nuxt-link>
        <nuxt-link to="/admin/comments" class="link linkWhite"> Comments </nuxt-link>
      </Intro>
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Intro from "~/components/UI/Intro";
export default {
  components: {Intro, Header },
  layout: 'admin'
}
</script>
