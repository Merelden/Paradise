<template>
  <div>
    <PostsList :posts="posts" />
  </div>
</template>

<script>
import PostsList from "../../components/Blog/PostsList";
export default {
  name: 'IndexPage',
  components: {
    PostsList
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'blue',
          description: 'lorem lorem lorem lorem',
          img: 'https://damion.club/uploads/posts/2022-09/1663995096_30-damion-club-p-tsvetnoi-fon-gradient-vkontakte-38.png'
        },
        {
          id: 2,
          title: 'red',
          description: 'lorem lorem lorem lorem',
          img: 'https://damion.club/uploads/posts/2022-09/1663995096_30-damion-club-p-tsvetnoi-fon-gradient-vkontakte-38.png'
        },
        {
          id: 3,
          title: 'black',
          description: 'lorem lorem lorem lorem',
          img: 'https://damion.club/uploads/posts/2022-09/1663995096_30-damion-club-p-tsvetnoi-fon-gradient-vkontakte-38.png'
        },
        {
          id: 4,
          title: 'white',
          description: 'lorem lorem lorem lorem',
          img: 'https://damion.club/uploads/posts/2022-09/1663995096_30-damion-club-p-tsvetnoi-fon-gradient-vkontakte-38.png'
        },
      ]
    }
  }
}
</script>
