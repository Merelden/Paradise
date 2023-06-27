<template>
  <div>
    <post :post="post"></post>
    <Comments :comments="comments"/>
    <NewComment />
  </div>
</template>

<script>
import Post from "../../../components/Blog/Post";
import NewComment from "../../../components/Comments/NewComment";
import Comments from "../../../components/Comments/Comments";
export default {
  components: {
    Post, NewComment, Comments
  },
  data() {
    return {
      post: {
        id: 1,
        title: 'blue',
        description: 'lorem lorem lorem lorem',
        img: 'https://damion.club/uploads/posts/2022-09/1663995096_30-damion-club-p-tsvetnoi-fon-gradient-vkontakte-38.png',
        content: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
      },
      comments: [
        { name: 'Alex', text: 'lorem lorem lorem' }
        { name: 'Sergey', text: 'lorem lorem lorem' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
