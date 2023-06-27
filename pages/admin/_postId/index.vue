<template>
  <div>
    <NewPostFrom
      :postEdit="post"
      @submit="onSubmit"/>
  </div>
</template>

<script>
import NewPostFrom from '@/components/Admin/NewPostFrom'
export default {
  components: { NewPostFrom },
  layout: 'admin',
  data() {
    return {
      post: {
        id: 1,
        title: 'blue',
        description: 'lorem lorem lorem lorem',
        img: 'https://damion.club/uploads/posts/2022-09/1663995096_30-damion-club-p-tsvetnoi-fon-gradient-vkontakte-38.png',
        content: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem'
      }
    }
  },
  methods: {
    onSubmit (post) {
      console.log('Post Editing!')
      console.log(post)
    }
  }
}
</script>

<style scoped>

</style>
