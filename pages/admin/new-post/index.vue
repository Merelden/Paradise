<template>
  <div>
    <NewPostFrom @submit="onSubmit"/>
  </div>
</template>

<script>
import NewPostFrom from '@/components/Admin/NewPostFrom'
export default {
  components: { NewPostFrom },
  layout: 'admin',
  methods: {
    onSubmit (post) {
      // console.log('Post added!')
      // console.log(post)
      this.$store.dispatch('addPost', post)
        .then(()=>{
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>

</style>
