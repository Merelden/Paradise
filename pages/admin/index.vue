<template>
  <div class="wrapper">
    <Header/>
    <!-- content -->
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin Page">
        <nuxt-link to="/admin" class="link linkWhite"> Admin</nuxt-link>
        <nuxt-link to="/admin/new-post" class="link"> New Post </nuxt-link>
      </Intro>
      <nuxt/>
    </div>
    <PostsList :admin=true :posts="posts"></PostsList>
    <nuxt />
  </div>

</template>

<script>
import PostsList from "@/components/Blog/PostsList";
import Intro from "@/components/UI/Intro";

export default {
  components: {
    PostsList, Intro
  },
  middleware: ['auth'],
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'blue',
          description: 'lorem lorem lorem lorem',
          img: 'https://i.pinimg.com/564x/be/8d/54/be8d54a3db603d273ac3db90181a1f15.jpg'
        },
        {
          id: 2,
          title: 'red',
          description: 'lorem lorem lorem lorem',
          img: 'https://i.pinimg.com/564x/9a/0a/de/9a0ade7f918f27fb208a1f11374f2757.jpg'
        },
        {
          id: 3,
          title: 'black',
          description: 'lorem lorem lorem lorem',
          img: 'https://i.pinimg.com/564x/47/7a/bc/477abc5d16b5b94195e0434b42ababb2.jpg'
        },
        {
          id: 4,
          title: 'white',
          description: 'lorem lorem lorem lorem',
          img: 'https://i.pinimg.com/564x/ed/77/b7/ed77b7aa763a9dc495df74350842ca67.jpg'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
